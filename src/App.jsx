import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import {
  CalendarCheck,
  HeartPulse,
  Info,
  Mail,
  Menu,
  Stethoscope,
  X,
} from 'lucide-react'

import gidiovetLogo from './assets/gidiovet-logo.jpeg'

import Home from './pages/Home'
import Services from './pages/Services'
import AnimalHealth from './pages/AnimalHealth'
import About from './pages/About'
import Contact from './pages/Contact'
import BookConsultation from './pages/BookConsultation'

import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="header">
        <div className="container nav-container">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <div className="brand-logo">
              <img
                src={gidiovetLogo}
                alt="Gidiovet Online Veterinary Care"
              />
            </div>

            <div>
              <span className="brand-name">Gidiovet</span>
              <span className="brand-subtitle">
                Online Veterinary Care
              </span>
            </div>
          </NavLink>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/animal-health" onClick={closeMenu}>
              Animal Health
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink
              to="/book-consultation"
              className="nav-button"
              onClick={closeMenu}
            >
              <CalendarCheck size={17} />
              Book Consultation
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/animal-health" element={<AnimalHealth />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/book-consultation"
          element={<BookConsultation />}
        />
      </Routes>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="brand footer-logo">
              <div className="brand-logo footer-brand-logo">
                <img
                  src={gidiovetLogo}
                  alt="Gidiovet Online Veterinary Care"
                />
              </div>

              <div>
                <span className="brand-name">Gidiovet</span>
                <span className="brand-subtitle">
                  Online Veterinary Care
                </span>
              </div>
            </NavLink>

            <p>Every Animal Has A Story.</p>

            <span>
              Professional veterinary guidance and animal health support
              available online worldwide.
            </span>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <NavLink to="/services">
              <Stethoscope size={16} />
              Services
            </NavLink>

            <NavLink to="/animal-health">
              <HeartPulse size={16} />
              Animal Health
            </NavLink>

            <NavLink to="/about">
              <Info size={16} />
              About
            </NavLink>

            <NavLink to="/contact">
              <Mail size={16} />
              Contact
            </NavLink>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <a
              href="https://wa.me/237671964562"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:gidiovetcare@gmail.com">
              gidiovetcare@gmail.com
            </a>

            <div>Available online 24/7</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Gidiovet Online Veterinary Care.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App