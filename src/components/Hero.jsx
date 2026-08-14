export default function Hero() {
  return (
    <section className="hero-section">
      {/* Text Content - Left Side */}
      <div className="hero-text">
        {/* "Hello, I'm" + "Shourya." */}
        <div>
          <div className="hero-greeting">
            Hello, I'm
          </div>
          <div className="hero-name">
            Shourya<span className="hero-name-dot">.</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle">
          Designing journeys<br />from scratch
        </div>

        {/* Role */}
        <div className="hero-role">
          UI UX Designer<br />Based in Noida
        </div>
      </div>

      {/* 3D Avatar - Right Side */}
      <div className="hero-avatar-wrapper">
        <img
          src="/assets/avatar_3d.png"
          alt="Shourya Vardhan 3D Avatar"
        />
        {/* Shadow ellipse under avatar */}
        <div className="hero-avatar-shadow" />
      </div>
    </section>
  )
}
