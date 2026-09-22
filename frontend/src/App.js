import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import TripStyleListing from './pages/TripStyleListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/travel-style/:style" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/:slug" element={<EgyptDetail />} />
          <Route path="/asien" element={<AsiaListing />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
