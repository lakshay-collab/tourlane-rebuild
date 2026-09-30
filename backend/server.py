from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
import httpx
import re
from datetime import timedelta
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class LeadCreate(BaseModel):
    name: str
    phone: str
    email: str
    destination: str = ""
    country_code: str = ""
    trip_title: str = ""
    source: str = ""
    passengers: Optional[Dict[str, int]] = None
    travel_dates: str = ""
    traveller_count: str = ""
    flight_assistance: str = ""

class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    destination: str = ""
    country_code: str = ""
    trip_title: str = ""
    source: str = ""
    passengers: Optional[Dict[str, int]] = None
    travel_dates: str = ""
    traveller_count: str = ""
    flight_assistance: str = ""
    kraya_status: str = "pending"
    kraya_lead_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]{2,}$")
PHONE_RE = re.compile(r"^\+?[0-9][0-9\s().-]{6,17}$")
KRAYA_USER_ERROR = "We couldn't submit your request right now. Please try again in a moment."

def validate_lead(lead: "LeadCreate"):
    lead.name, lead.phone, lead.email, lead.destination = lead.name.strip(), lead.phone.strip(), lead.email.strip(), lead.destination.strip()
    if not lead.name:
        raise HTTPException(400, "Please enter your name")
    if not PHONE_RE.match(lead.phone):
        raise HTTPException(400, "Please enter a valid phone number")
    if not EMAIL_RE.match(lead.email):
        raise HTTPException(400, "Please enter a valid email address")
    if not lead.destination:
        raise HTTPException(400, "Destination is required")

def kraya_phone(lead: "Lead") -> str:
    digits = re.sub(r"\D", "", f"{lead.country_code}{lead.phone}")
    return f"91{digits}" if len(digits) == 10 else digits

def traveller_count(lead: "Lead") -> str:
    if lead.traveller_count:
        return lead.traveller_count
    if not lead.passengers:
        return ""
    return ", ".join(f"{n} {label}" for label, n in lead.passengers.items() if n)

async def push_lead_to_kraya(lead: Lead) -> str:
    api_key, url = os.environ['KRAYA_API_KEY'], os.environ['KRAYA_LEADS_URL']
    payload = {
        "name": lead.name, "phone": kraya_phone(lead), "email": lead.email, "Destination": lead.destination,
        "Lead Source": "Website", "Travel Dates": lead.travel_dates, "Traveller Count": traveller_count(lead),
        "stage": "New Lead", "pipeline": "Leads",
    }
    async with httpx.AsyncClient(timeout=httpx.Timeout(15.0, connect=5.0)) as http:
        res = await http.post(url, json=payload, headers={"X-KRAYA-API-KEY": api_key, "Content-Type": "application/json"})
    if res.is_error:
        raise RuntimeError(f"Kraya {res.status_code}: {res.text[:300]}")
    try:
        body = res.json()
    except ValueError:
        return ""
    data = body.get("data", body) if isinstance(body, dict) else {}
    return str(data.get("id") or data.get("_id") or data.get("leadId") or "") if isinstance(data, dict) else ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    if not input.destination:
        input.destination = input.trip_title or input.source
    validate_lead(input)
    since = (datetime.now(timezone.utc) - timedelta(minutes=2)).isoformat()
    dup = await db.leads.find_one({"email": input.email, "phone": input.phone, "destination": input.destination, "kraya_status": "synced", "created_at": {"$gte": since}}, {"_id": 0})
    if dup:
        logger.info(f"Duplicate lead ignored: {input.email} / {input.destination}")
        dup['created_at'] = datetime.fromisoformat(dup['created_at'])
        return dup
    lead = Lead(**input.model_dump())
    try:
        lead.kraya_lead_id = await push_lead_to_kraya(lead)
        lead.kraya_status = "synced"
    except (httpx.HTTPError, RuntimeError) as exc:
        lead.kraya_status = "failed"
        logger.error(f"Kraya sync failed for {lead.email}: {exc}")
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    logger.info(f"New lead captured: {lead.name} / {lead.country_code}{lead.phone} / {lead.email} / destination='{lead.destination}' / kraya={lead.kraya_status}")
    if lead.kraya_status != "synced":
        raise HTTPException(502, KRAYA_USER_ERROR)
    return lead

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for l in leads:
        if isinstance(l.get('created_at'), str):
            l['created_at'] = datetime.fromisoformat(l['created_at'])
    return leads

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()