import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
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

export default App
