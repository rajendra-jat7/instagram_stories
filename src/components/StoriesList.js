import React, { useEffect, useState } from 'react';
import { getStories } from '../api';
import UserStory from './UserStory';

const StoriesList = ({ onSelectStory }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await getStories();
      setStories(stories);
    };

    fetchStories();
  }, []);

  return (
    <div className="stories-list">
      {stories.map((user) => (
        <UserStory key={user.id} user={user} onSelectStory={onSelectStory} />
      ))}
    </div>
  );
};

export default StoriesList;
