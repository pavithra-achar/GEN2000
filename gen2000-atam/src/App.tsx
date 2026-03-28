import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './App.css';
import Intro from './folkarts/Intro';
import Artist from './folkarts/Artist';
import Home from './Home';
import Landing from './Landing';
import PresentDay from './folkarts/PresentDay';
import History from './folkarts/History';
import Performance from './folkarts/Performance';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      {/* Navigation */}
      <div>
        <Link to="/home">Home</Link> |{" "}
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/art/:id/" element={<Landing />} />
        <Route path="/art/:id/intro" element={<Intro />}/>
        <Route path="/art/:id/artists" element={<Artist />}/>
        <Route path="/art/:id/presentDay" element={<PresentDay/>}/>
        <Route path="/art/:id/history" element={<History />}/>
        <Route path="/art/:id/performance" element={<Performance />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
