import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projectsData } from '../data/projectsData'

export default function ProjectDetailPage({ projectId, onNavigate }) {
  const data = projectsData[projectId] || projectsData['recruitments']

  return (
    <div className="page-container">
      {/* Content Container */}
      <div className="content-container">
        <Navbar onNavigate={onNavigate} />

        {/* Page Hero Section */}
        <section className="project-hero">
          {/* Project Title */}
          <h1 className="project-title">
            {data.title}
          </h1>

          {/* Hero Banner Image */}
          <div className="project-banner">
            <img
              src={data.bannerSrc}
              alt={`${data.title} Banner`}
              className="banner-bg-img"
            />
            {data.mockupSrc && (
              <img
                src={data.mockupSrc}
                alt={`${data.title} Mockup Overlay`}
                className="banner-mockup-img"
              />
            )}
          </div>
        </section>

        {/* Case Study Details - Two Columns Layout */}
        <section className="case-study-section">
          {/* Left Column: Headline, Summary & CTA */}
          <div className="case-study-left">
            <h2 className="case-study-headline">
              {data.headline}
            </h2>

            <p className="case-study-summary">
              {data.summary}
            </p>

            <button
              className="case-study-btn"
              onClick={() => {
                if (data.buttonLink) {
                  window.open(data.buttonLink, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {data.buttonText}
            </button>
          </div>

          {/* Right Column: Case Study Sections */}
          <div className="case-study-right">
            {/* Problem Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Problem</h3>
              <p className="body-text">{data.problem.intro}</p>

              {data.problem.processFlow && (
                <div className="process-flow-text">
                  {data.problem.processFlow}
                </div>
              )}

              {data.problem.bullets && (
                <ul className="case-study-bullets">
                  {data.problem.bullets.map((bullet, idx) => (
                    <li key={idx} className="body-text">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {data.problem.outro && <p className="body-text">{data.problem.outro}</p>}
            </div>

            {/* Goal Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Goal</h3>
              <p className="body-text">{data.goal}</p>
            </div>

            {/* My Process Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">My Process</h3>
              {data.process.map((step, idx) => (
                <div key={idx} className="process-step">
                  <div className="process-step-title">
                    {step.title}
                  </div>
                  {step.content && <p className="body-text">{step.content}</p>}
                  {step.subBullets && (
                    <ul className="sub-bullets">
                      {step.subBullets.map((sub, sIdx) => (
                        <li key={sIdx} className="body-text">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Solution Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Solution</h3>
              {data.solutionIntro && (
                <p className="body-text" style={{ marginBottom: '8px' }}>{data.solutionIntro}</p>
              )}
              <ul className="solution-list">
                {data.solution.map((sol, idx) => (
                  <li key={idx} className="body-text">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Outcome</h3>
              {data.outcome && <p className="body-text">{data.outcome}</p>}
              {data.outcomeBullets && (
                <ul className="outcome-list">
                  {data.outcomeBullets.map((out, idx) => (
                    <li key={idx} className="body-text">
                      {out}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Key Learnings Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Key Learnings</h3>
              <ul className="learnings-list">
                {data.keyLearnings.map((learn, idx) => (
                  <li key={idx} className="body-text">
                    {learn}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion Section */}
            <div className="case-study-subsection">
              <h3 className="section-heading">Conclusion</h3>
              <p className="body-text">{data.conclusion}</p>
            </div>
          </div>
        </section>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  )
}
