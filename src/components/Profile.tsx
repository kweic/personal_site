import React from 'react';
import profileImage from '../assets/1553443320138.jpeg';

const Profile: React.FC = () => {
  return (
    <div className="profile-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1 className="profile-name">Kevin Weichel</h1>
      <h2 className="profile-title">Software Developer</h2>
    </div>
  );
};

export default Profile; 