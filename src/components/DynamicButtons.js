import React, { useState } from 'react';
import './DynamicButtons.css';

// Import images
import heartIcon from '../images/heartIcon.png';
import commentIcon from '../images/commentIcon.png';
import sendIcon from '../images/sendIcon.png';

// Define a Button component
const Button = ({ iconSrc, text, count, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`dynamic-button ${hovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="icon" src={iconSrc} alt={text} />
      {count}
    </button>
  );
};

// Define the DynamicButtons component
const DynamicButtons = () => {
  // Handle button click
  const handleClick = (buttonText) => {
    alert(`Button clicked: ${buttonText}`);
  };

  // Button data
  const buttonsData = [
    { iconSrc: heartIcon, text: 'Likes', count: '24.5k' },
    { iconSrc: commentIcon, text: 'Comments', count: '50' },
    { iconSrc: sendIcon, text: 'Shares', count: '20' },
  ];

  return (
    <div className="dynamic-buttons">
      {buttonsData.map((btn, index) => (
        <Button
          key={index}
          iconSrc={btn.iconSrc}
          text={btn.text}
          count={btn.count}
          onClick={() => handleClick(btn.text)}
        />
      ))}
    </div>
  );
};

export default DynamicButtons;
