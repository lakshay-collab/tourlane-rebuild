import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import TourDetail from './pages/TourDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/:slug" element={<TourDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
