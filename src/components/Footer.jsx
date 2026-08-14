export default function Footer({ onNavigate }) {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shourya-vardhan-singh-chauhan-158017312' }
  ];

  return (
    <footer className="footer">
      {/* Top Divider */}
      <div className="footer-divider" />

      {/* Footer Content */}
      <div className="footer-content">
        {/* Left Column */}
        <div className="footer-left">
          {/* Top Section */}
          <div className="footer-left-top">
            {/* Email */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=svsc.ux@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-email">
              SVSC.UX@GMAIL.COM
            </a>

            {/* Portfolio Title */}
            <div
              onClick={() => onNavigate && onNavigate('home')}
              className="footer-portfolio-title"
            >
              Shourya_<br />Portfolio_2026
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            <div className="footer-credit">
              DESIGNED BY_SHOURYA VARDHAN
            </div>
            <div className="footer-copyright">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#7F7F80" strokeWidth="1.5" />
                <text x="7.5" y="10.5" textAnchor="middle" fill="#7F7F80" fontSize="9" fontFamily="Product Sans">C</text>
              </svg>
              <span className="footer-copyright-text">
                2026_ALL RIGHTS RESERVED
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          {/* Links */}
          <div className="footer-links-grid">
            {/* Left Links */}
            <div className="footer-links-col">
              {['About', 'Works', 'Skills', 'Resume'].map((link) => (
                link === 'Resume' ? (
                  <a
                    key={link}
                    href="https://drive.google.com/drive/folders/1b6dxcA9d28mE-eHR94-P-vqBCkxRu_3c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{ textDecoration: 'none' }}
                  >
                    {link}
                    <ArrowIcon />
                  </a>
                ) : (
                  <button
                    key={link}
                    onClick={() => onNavigate && onNavigate('home', link.toLowerCase())}
                    className="footer-link"
                  >
                    {link}
                    <ArrowIcon />
                  </button>
                )
              ))}
            </div>

            {/* Right Links */}
            <div className="footer-links-col">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {social.name}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>

          {/* Let's Connect Button */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=svsc.ux@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="footer-connect-btn">
            <div className="footer-connect-inner">
              <span className="footer-connect-text">
                Let's Connect
              </span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.375 10.625L10.625 4.375M10.625 4.375H5M10.625 4.375V10" stroke="#FDFBFB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>

        {/* Footer Avatar - Bottom Right */}
        <div className="footer-avatar">
          <img
            src="/assets/footer_avatar.png"
            alt="Shourya Avatar"
          />
          <div className="footer-avatar-shadow" />
        </div>
      </div>
    </footer>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', flexShrink: 0 }}>
      <path d="M4.375 10.625L10.625 4.375M10.625 4.375H5M10.625 4.375V10" stroke="#5F5F5F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
