import React from 'react';

const UserStory = ({ user, onSelectStory }) => {
  const { username, avatar, stories } = user;
  const hasUnseen = stories.some(story => !story.seen);

  return (
    <div className={`user-story ${hasUnseen ? 'unseen' : ''}`} onClick={() => onSelectStory(user)}>
      <img src={avatar} alt={username} />
      <h5>{username}</h5>
    </div>
  );
};

export default UserStory;
