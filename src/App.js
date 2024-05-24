import React, { useState } from 'react';
import StoriesList from './components/StoriesList';
import StoryViewer from './components/StoryViewer';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectStory = (user) => {
    setSelectedUser(user);
  };

  const handleCloseStory = () => {
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <h1>Instagram</h1>
      <StoriesList onSelectStory={handleSelectStory} />
      {selectedUser && <StoryViewer user={selectedUser} onClose={handleCloseStory} />}
    </div>
  );
};

export default App;
