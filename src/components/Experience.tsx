import React from 'react';
import vouchLogo from '../assets/vouch-insurance.png';
import rootLogo from '../assets/root-insurance.jpg';
import manifestLogo from '../assets/manifest-solutions.png';

interface Role {
  title: string;
  details: string;
  years: string;
}

interface Company {
  name: string;
  image: string;
  link: string;
  description: string;
  roles: Role[];
}

const Experience: React.FC = () => {
  const companies: Company[] = [
    {
      name: 'Vouch Insurance',
      image: vouchLogo,
      link: 'https://vouch.us',
      description: 'Protecting thousands of companies from seed to IPO. Insurance designed for the unique risks of high-growth companies.',
      roles: [
        {
          title: 'Software Engineer II',
          details: 'Full-Stack Development primarily working on the Onboarding funnel which includes landing page and error pages with routing, questions flow, answer review page, coverage customization and selections, presenting prices and checkout.',
          years: '2022 - 2025 3yrs 2 mos'
        }
      ]
    },
    {
      name: 'Root Inc.',
      image: rootLogo,
      link: 'https://joinroot.com',
      description: "Root Inc. is disrupting the archaic, trillion-dollar insurance industry. Powerful insurance products and technology platforms that rewrite the rules for today's world, promoting fairness, simplicity, and personalization.",
      roles: [
        {
          title: 'Software Engineer II',
          details: 'Contributed to front-end and backend development across a variety of projects including flagship and experimental. Work included some leading projects, both solo and team work on mobile and desktop applications.',
          years: '2019 - 2022 2yrs 11mos'
        }
      ]
    },
    {
      name: 'Manifest Solutions',
      image: manifestLogo,
      link: 'https://manifestcorp.com',
      description: 'Empowering smart people to solve problems, build better solutions, and become real leaders.',
      roles: [
        {
          title: 'Full Stack Developer',
          details: 'Consultant for Columbus City Schools - Developed and led internal & external facing apps for student and administration users.',
          years: '2017 - 2019 2yrs 3mos'
        }
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h2>Where I've Worked</h2>
      <div className="companies-grid">
        {companies.map((company) => (
          <div key={company.name} className="company-container">
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="company-card"
            >
              <div className="company-image-container">
                <img src={company.image} alt={`${company.name} logo`} className="company-image" />
              </div>
              <div className="company-content">
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
            </a>
            <div className="roles-container">
              {company.roles.map((role, index) => (
                <div key={index} className="role-item">
                  <div className="role-header">
                    <h4 className="role-title">{role.title}</h4>
                    <span className="role-years">{role.years}</span>
                  </div>
                  <p className="role-details">{role.details}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 