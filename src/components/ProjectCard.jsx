export default function ProjectCard({
  bgColor,
  tag,
  title,
  description,
  mockupSrc,
  mockupSrc2,
  mockupType = 'browser',
  onViewProject,
  underDevelopment = false,
}) {
  const isPhones = mockupType === 'phones'
  const isHexecute = title === 'Hexecute'

  return (
    <div
      className="project-card"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Noise Effect */}
      <div className="project-card-noise" aria-hidden="true" />

      {/* Text Content - Left Side */}
      <div className={`project-card-content${isPhones ? ' phones-layout' : ''}`}>
        {/* Tag */}
        <div className="project-card-tag" style={{ marginBottom: underDevelopment ? '12px' : undefined }}>
          {tag}
        </div>

        {/* Under Development Badge */}
        {underDevelopment && (
          <div className="under-development-badge">
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Under Development
          </div>
        )}

        {/* Title */}
        <div className={`project-card-title ${isPhones ? 'phones-title' : 'browser-title'}`}>
          {title}
        </div>

        {/* Description */}
        <div className="project-card-desc">
          {description}
        </div>

        {/* View Project Button */}
        <button
          onClick={() => {
            if (underDevelopment) {
              alert("Hold your horses! 🐎 This project is still brewing in the development cauldron. Check back soon for the grand reveal!");
            } else if (onViewProject) {
              onViewProject();
            }
          }}
          className="project-card-btn"
        >
          View Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83 14.17L14.17 5.83M14.17 5.83H6.67M14.17 5.83V13.33" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mockup Images - Right Side */}
      {isPhones ? (
        <>
          {/* Top phone */}
          <img
            src={mockupSrc}
            alt="Project mockup - phone 1"
            className="project-mockup-phone-top"
          />
          {/* Bottom phone */}
          <img
            src={mockupSrc2}
            alt="Project mockup - phone 2"
            className="project-mockup-phone-bottom"
          />
        </>
      ) : (
        <img
          src={mockupSrc}
          alt={`${title} mockup`}
          className={`project-mockup-browser${isHexecute ? ' hexecute' : ''}`}
        />
      )}
    </div>
  )
}
