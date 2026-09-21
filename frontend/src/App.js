import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/:slug" element={<EgyptDetail />} />
          <Route path="/asien" element={<AsiaListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
