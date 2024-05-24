import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const StoryViewer = ({ user, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  });

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev()
  });

  const handleNext = () => {
    if (currentIndex < user.stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="story-viewer" {...swipeHandlers}>
      <div className="story-card">
        <div className="progress-bar-container">
          {user.stories.map((_, index) => (
            <div key={index} className="progress-bar">
              {index === currentIndex && <div className="progress"></div>}
            </div>
          ))}
        </div>
        <div className="user-info">
          <img src={user.avatar} alt="User avatar" />
          <div className="user-name">{user.name}</div>
        </div>
        <div className="story-image">
          <img src={user.stories[currentIndex].image} alt="story" />
        </div>
        <button className="close-button" onClick={onClose}>×</button>
        <button className="prev-button" onClick={handlePrev}>❮</button>
        <button className="next-button" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default StoryViewer;
