import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import profilePic from '../assets/Profile Pic.png'

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-container">
      <div className="content-container">
        <Navbar onNavigate={onNavigate} />

        {/* About Content */}
        <section className="about-section">
          <div className="about-layout">
            {/* Left — Profile Photo */}
            <div className="about-photo-wrapper">
              <img
                src={profilePic}
                alt="Shourya Vardhan"
                className="about-photo"
              />
            </div>

            {/* Right — Text Content */}
            <div className="about-text">
              <h2 className="about-heading">
                Hey! I'm <span className="about-highlight">Shourya</span>{' '}
              </h2>

              <p className="about-body">
                Based in Delhi NCR, currently finishing a CSE degree that somehow
                turned into a design career. Before that, six years of classical
                singing taught me the same thing design does now: know when to
                hold back and when one small change moves everything.
              </p>

              <h3 className="about-subheading">
                How did I get into <span className="about-highlight">design</span>?{' '}
              </h3>

              <p className="about-body">
                A design workshop in my first year of college is where it started.
                Seniors walked us through the basics and something clicked. I have
                been pushing pixels since, trying to make every screen make sense
                before it looks good.
              </p>

              <p className="about-body">
                I care about work that is honest over trendy. If it looks polished but
                does not solve anything, I would rather scrap it and start over.
              </p>
            </div>
          </div>
        </section>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  )
}
