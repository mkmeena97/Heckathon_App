import React, { useState } from 'react';
import HackathonList from '../components/HackathonList';
import HackathonDetail from '../components/HackathonDetail'; // Add this import
import { deleteHackathon } from '../services/hackathonService';

const HomePage = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleSelectHackathon = (hackathon) => {
    setSelectedHackathon(hackathon);
    // navigate to detail page (if using react-router)
  };

  const handleDelete = async (id) => {
    await deleteHackathon(id);
    // refresh the list or redirect
  };

  return (
    <div>
      <h1>Hackathons</h1>
      <HackathonList onSelectHackathon={handleSelectHackathon} />
      {selectedHackathon && <HackathonDetail hackathon={selectedHackathon} onDelete={handleDelete} />}
    </div>
  );
};

export default HomePage;
