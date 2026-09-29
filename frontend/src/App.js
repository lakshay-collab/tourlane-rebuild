import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import VietnamListing, { VietnamHolidays } from './pages/VietnamListing';
import SriLankaListing, { SriLankaHolidays } from './pages/SriLankaListing';
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
          <Route path="/asien/:slug" element={<EgyptDetail />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
