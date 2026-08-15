export default function Skills() {
  const skills = [
    { 
      num: '01', 
      name: 'UI/UX Design',
      points: ['Wireframing & Prototyping', 'User Flows & Journey Mapping', 'Design Systems']
    },
    { 
      num: '02', 
      name: 'Product Design',
      points: ['User Research & Testing', 'Product & Feature Strategy', 'Interaction Design']
    },
    { 
      num: '03', 
      name: 'Graphic Design',
      points: ['Creative Direction', 'Visual Communication', 'Illustration & Iconography']
    },
    { 
      num: '04', 
      name: 'Brand Design',
      points: ['Brand Strategy', 'Logo & Identity Systems', 'Brand Guidelines']
    }
  ]

  return (
    <section id="skills" className="skills-section">
      {/* Skills Title */}
      <h2 className="skills-title">
        Skills
      </h2>

      {/* Skill Rows */}
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.num} className="skill-row">
            <div className="skill-header">
              <span className="skill-num">
                {skill.num}
              </span>
              <span className="skill-name">
                {skill.name}
              </span>
            </div>
            <ul className="skill-points">
              {skill.points.map((point, index) => (
                <li key={index}>- {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
