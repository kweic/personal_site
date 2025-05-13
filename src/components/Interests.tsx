import React from 'react';

interface Interest {
  emoji: string;
  name: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
}

const interests: Interest[] = [
  {
    emoji: '🌊',
    name: 'Swimming',
    description: 'Competitive swimming in high school, currently on a Masters team.',
    link: {
        url: 'https://www.usms.org/comp/meets/indresults.php?SwimmerID=8UACJ',
        text: 'USMS Results',
    }
  },
  {
    emoji: '💿',
    name: 'Music',
    description: 'Always looking for new favorites.',
    link: {
        url: 'https://open.spotify.com/user/128227629?si=cd3377cde0034e5d',
        text: 'Spotify',
    },
  },
  {
    emoji: '👟',
    name: 'Running',
    description: 'The best way to find euphoria.',
    link: {
      url: 'https://www.strava.com/athletes/62699518',
      text: 'Strava'
    }
  },
  {
    emoji: '🔭',
    name: 'Sci-fi / Fantasy',
    description: 'Grew up on Star Wars and The NeverEnding Story. I enjoy sci-fi books, movies, and TV shows.',
  },
  {
    emoji: '💻',
    name: 'Programming',
    description: 'Started playing with code as a teenager making games and websites, now coding professionally.',
    link: {
        url: 'https://github.com/kweic',
        text: 'Github'
      }
  },
  {
    emoji: '🖊️',
    name: 'Art',
    description: 'Avid painter in my teens, now I enjoy visiting museums and galleries.',
    link: {
        url: 'https://kweichel.artstation.com/pages/portfolio',
        text: 'ArtStation'
    }
  }
];

const Interests: React.FC = () => {
  return (
    <div className="interests-section" id="interests">
      <h2>Interests</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <span className="interest-emoji">{interest.emoji}</span>
            <div className="interest-content">
              <h3 className="interest-name">{interest.name}</h3>
              <p className="interest-description">{interest.description}</p>
              {interest.link && (
                <a 
                  href={interest.link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="interest-link"
                >
                  {interest.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests; 