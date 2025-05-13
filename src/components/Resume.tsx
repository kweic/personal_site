import React from 'react';
import resumePDF from '../assets/KevinWeichel_SoftwareDeveloper_resume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <div className="resume-pdf-container">
        <iframe
          src={`${resumePDF}#toolbar=0&navpanes=0`}
          title="Resume"
          className="resume-pdf"
        />
      </div>
    </div>
  );
};

export default Resume; 