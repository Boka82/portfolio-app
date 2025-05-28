import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App