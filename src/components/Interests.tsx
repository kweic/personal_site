import React from 'react';

interface Interest {
  emoji: string;
  name: string;
  description: string;
}

const interests: Interest[] = [
  {
    emoji: '🌊',
    name: 'Swimming',
    description: 'Competitive swimming in highschool, currently on the Masters team.',
  },
  {
    emoji: '💿',
    name: 'Music',
    description: 'Always looking for new favorites.',
  },
  {
    emoji: '👟',
    name: 'Running',
    description: 'The best way to find euphoria.',
  },
  {
    emoji: '🔭',
    name: 'Sci-fi',
    description: 'Grew up on Star Wars. I enjoy sci-fi books, movies, and TV shows.',
  },
  {
    emoji: '💻',
    name: 'Programming',
    description: 'Started playing with code as a teenager making games and websites, now coding professionally.',
  },
  {
    emoji: '🖊️',
    name: 'Art',
    description: 'Avid painter in my teens, now I enjoy visiting museums and galleries.',
  },
  
];

const Interests: React.FC = () => {
  return (
    <div className="interests-section">
      <h2>Interests</h2>
      <div className="flicker-line"></div>
      <div className="interests-grid">
        {interests.map(interest => (
          <div key={interest.name} className="interest-item">
            <span className="interest-emoji">{interest.emoji}</span>
            <div className="interest-content">
              <h3 className="interest-name">{interest.name}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests; 