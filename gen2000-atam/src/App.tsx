import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './App.css'
import Home from './Home';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
