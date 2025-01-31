import { Link, Routes, Route } from 'react-router-dom'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home';
import './App.css';

function App() {
  return (
     <div id="container">
      
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        </div>
      
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
