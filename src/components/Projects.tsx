import React from 'react';
import dropSpellImage from '../assets/drop_spell_example.png';
import diceMosaicImage from '../assets/dice_mosaic_example.png';
import shyGroundhogImage from '../assets/shy_groundhog.jpg';

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: 'Drop Spell',
    description: 'Drop letters in the best places to spell words. Choose your drop wisely to prevent a pile up.',
    image: dropSpellImage,
    link: 'https://play.google.com/store/apps/details?id=com.projects.w.kevin.letterdrop',
    technologies: ['Java', 'Firebase', 'Google Play'],
  },
  {
    name: 'Dice Mosaic Generator',
    description: 'Prep your image for a mosaic using dice. Supports sizing, contrast, brightness with cost preview.',
    image: diceMosaicImage,
    link: 'https://kweic.github.io/diceImage.html',
    technologies: ['Javascript', 'CSS'],
  },
  {
    name: 'Children\'s Book: The Shy Groundhog',
    description: 'Written the old fashioned way, images created with AI to explore this new technology.',
    image: shyGroundhogImage,
    link: 'https://a.co/d/hmtLW4o',
    technologies: ['Amazon KDP', 'Midjourney'],
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 