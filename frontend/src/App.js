import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import TripStyleListing from './pages/TripStyleListing';
import About from './pages/About';
import Care from './pages/Care';

const StyleRedirect = () => <Navigate to={`/afrika/aegypten/holidays/${useParams().style}`} replace />;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/holidays" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/holidays/:style" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/travel-style/:style" element={<StyleRedirect />} />
          <Route path="/afrika/aegypten/:slug" element={<EgyptDetail />} />
          <Route path="/asien" element={<AsiaListing />} />
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
