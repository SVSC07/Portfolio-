import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import FlowArt, { FlowSection } from '../components/ui/story-scroll'

export default function HomePage({ onNavigate }) {
  return (
    <div className="page-container">
      {/* Content Container */}
      <div className="content-container">
        <Navbar onNavigate={onNavigate} />
        <Hero />

        {/* Project Cards with GSAP Story-Scroll Animation */}
        <div id="work" className="project-cards-section">
          <FlowArt aria-label="Featured Works">
            <FlowSection aria-label="GDG Website Revamp">
              <ProjectCard
                bgColor="#F9595E"
                tag="Website Design  •  Project"
                title="GDG Website Revamp"
                description="Revamped the GDG website interface, establishing a clear visual hierarchy to improve usability for student developers."
                mockupSrc="/assets/project1_phone_top.png"
                mockupSrc2="/assets/project1_phone_bottom.png"
                mockupType="phones"
                onViewProject={() => onNavigate('project', 'website-revamp')}
              />
            </FlowSection>

            <FlowSection aria-label="GDG Recruitment Platform">
              <ProjectCard
                bgColor="#181C1E"
                tag="Website Design  •  Project"
                title="GDG Recruitment Platform"
                description="Redesigned GDG's recruitment platform end-to-end, streamlining the journey from domain discovery to final application submission."
                mockupSrc="/assets/project2_mockup.png"
                mockupType="browser"
                onViewProject={() => onNavigate('project', 'recruitments')}
              />
            </FlowSection>

            <FlowSection aria-label="Hexecute">
              <ProjectCard
                bgColor="#20312F"
                tag="Website Design  •  Project"
                title="Hexecute"
                description="Spearheaded the 0-to-1 product design for a web3 coding arena, crafting an intuitive, gamified interface for fun on-chain developer battles."
                mockupSrc="/assets/image.png"
                mockupType="browser"
                onViewProject={() => onNavigate('project', 'hexecute')}
                underDevelopment={true}
              />
            </FlowSection>
          </FlowArt>
        </div>

        <Skills />
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  )
}
