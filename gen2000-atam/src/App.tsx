import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './App.css';
import Intro from './folkarts/Intro';
import Artist from './folkarts/Artist';
import Home from './Home';
import Landing from './Landing';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
