import React from 'react';

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Javascript', category: 'Languages' },
  { name: 'Typescript', category: 'Languages' },
  { name: 'Ruby', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  { name: 'React', category: 'Front-end' },
  { name: 'React Native', category: 'Front-end' },
  { name: 'Jest', category: 'Front-end' },
  { name: 'Material-UI', category: 'Front-end' },
  { name: 'JSP', category: 'Front-end' },
  { name: 'HTML/CSS', category: 'Front-end' },
  { name: 'Tailwind', category: 'Front-end' },

  { name: 'Ruby on Rails', category: 'Backend' },
  { name: 'Spring', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'ActiveRecord', category: 'Backend' },

  { name: 'Git', category: 'DevOps & Tools' },
  { name: 'CircleCI', category: 'DevOps & Tools' },
  { name: 'Postgres', category: 'DevOps & Tools' },
  { name: 'Zendesk', category: 'DevOps & Tools' },
  { name: 'Segment', category: 'DevOps & Tools' },
  { name: 'Mode', category: 'DevOps & Tools' },
];

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {categories.map(category => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 