import React, { useEffect, useState } from 'react';
import './About.css';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Profile from '../components/Profile';

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const sections = ['about', 'skills', 'projects', 'interests', 'resume'];
    const scrollPosition = window.scrollY + 300;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page">
      <div className="sidebar">
        <Profile />
        <nav className="nav-items">
          <a
            href="#about"
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About Me
          </a>
          <a
            href="#skills"
            className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
          <a
            href="#resume"
            className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => scrollToSection('resume')}
          >
            Resume
          </a>
          <a
            href="#projects"
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a
            href="#interests"
            className={`nav-item ${activeSection === 'interests' ? 'active' : ''}`}
            onClick={() => scrollToSection('interests')}
          >
            Interests
          </a>
        </nav>
      </div>
      <main className="main-content">
        <section id="about">
          <Bio />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="interests">
          <Interests />
        </section>
      </main>
    </div>
  );
};

export default About; 