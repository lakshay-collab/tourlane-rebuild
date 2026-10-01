import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LeadModalProvider } from './components/egypt/LeadModalProvider';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import VietnamListing, { VietnamHolidays } from './pages/VietnamListing';
import SriLankaListing, { SriLankaHolidays } from './pages/SriLankaListing';
import MalaysiaListing, { MalaysiaHolidays } from './pages/MalaysiaListing';
import SingaporeListing, { SingaporeHolidays } from './pages/SingaporeListing';
import KazakhstanListing, { KazakhstanHolidays } from './pages/KazakhstanListing';
import BhutanListing, { BhutanHolidays } from './pages/BhutanListing';
import TripStyleListing from './pages/TripStyleListing';
import About from './pages/About';
import Care from './pages/Care';

const StyleRedirect = () => <Navigate to={`/afrika/aegypten/holidays/${useParams().style}`} replace />;

// Reset scroll to the top on every route change (hash links keep their in-page target).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppWidget />
        <LeadModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/holidays" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/holidays/:style" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/travel-style/:style" element={<StyleRedirect />} />
          <Route path="/afrika/aegypten/:slug" element={<EgyptDetail />} />
          <Route path="/asien" element={<AsiaListing />} />
          <Route path="/asien/vietnam" element={<VietnamListing />} />
          <Route path="/asien/vietnam/holidays" element={<VietnamHolidays />} />
          <Route path="/asien/vietnam/holidays/:style" element={<VietnamHolidays />} />
          <Route path="/asien/sri-lanka" element={<SriLankaListing />} />
          <Route path="/asien/sri-lanka/holidays" element={<SriLankaHolidays />} />
          <Route path="/asien/sri-lanka/holidays/:style" element={<SriLankaHolidays />} />
          <Route path="/asien/malaysia" element={<MalaysiaListing />} />
          <Route path="/asien/malaysia/holidays" element={<MalaysiaHolidays />} />
          <Route path="/asien/malaysia/holidays/:style" element={<MalaysiaHolidays />} />
          <Route path="/asien/singapore" element={<SingaporeListing />} />
          <Route path="/asien/singapore/holidays" element={<SingaporeHolidays />} />
          <Route path="/asien/singapore/holidays/:style" element={<SingaporeHolidays />} />
          <Route path="/asien/kazakhstan" element={<KazakhstanListing />} />
          <Route path="/asien/kazakhstan/holidays" element={<KazakhstanHolidays />} />
          <Route path="/asien/kazakhstan/holidays/:style" element={<KazakhstanHolidays />} />
          <Route path="/asien/bhutan" element={<BhutanListing />} />
          <Route path="/asien/bhutan/holidays" element={<BhutanHolidays />} />
          <Route path="/asien/bhutan/holidays/:style" element={<BhutanHolidays />} />
          <Route path="/asien/:slug" element={<EgyptDetail />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
        </Routes>
        </LeadModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
