import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Stakeholders from './pages/Stakeholders';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <Router basename="/Samadhantra">
      <div className="app-shell">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
