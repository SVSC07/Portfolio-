import { useState } from 'react'

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (page, param) => {
    setMenuOpen(false)
    onNavigate && onNavigate(page, param)
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo SVSC */}
        <img
          src="/assets/logo_svsc.svg"
          alt="SVSC Logo"
          onClick={() => handleNav('home')}
          className="navbar-logo"
        />

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <button onClick={() => handleNav('home', 'work')} className="nav-link-btn">Work</button>
          <button onClick={() => handleNav('home', 'skills')} className="nav-link-btn">Skills</button>
          <button onClick={() => handleNav('home', 'about')} className="nav-link-btn">About</button>
          <a href="https://drive.google.com/file/d/1X7-eDkYb4SRD5wrlrtj-s0N9MoA3UEG9/preview" target="_blank" rel="noopener noreferrer" className="nav-link-btn" style={{ textDecoration: 'none' }}>Resume</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => handleNav('home', 'work')} className="nav-link-btn">Work</button>
          <button onClick={() => handleNav('home', 'skills')} className="nav-link-btn">Skills</button>
          <button onClick={() => handleNav('home', 'about')} className="nav-link-btn">About</button>
          <a href="https://drive.google.com/file/d/1X7-eDkYb4SRD5wrlrtj-s0N9MoA3UEG9/preview" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="nav-link-btn" style={{ textDecoration: 'none' }}>Resume</a>
        </div>
      )}
    </>
  )
}
