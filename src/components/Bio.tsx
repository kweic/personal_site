import React from 'react';

const Bio: React.FC = () => {
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const bioText = `As a teen I enjoyed making webpages and playing with Visual Basic to create small games. After getting heavily into painting in high school I found work as an Airbrush Artist at Cedar Point Amusement Park. I attended The Columbus College of Art & Design with an interest in 3D modeling and animation. I've since found my way back to the old passion of coding and have enjoyed working as a Software Developer for the last ${yearsOfExperience}+ years.`;

  return (
    <div className="bio-section">
      <h2>About Me</h2>
      <div className="bio-container">
        <div className="bio-content">
          <p className="bio-text">{bioText}</p>
        </div>
      </div>
    </div>
  );
};

export default Bio; 