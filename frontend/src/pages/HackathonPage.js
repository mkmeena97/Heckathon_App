import React from 'react';
import HackathonDetail from '../components/HackathonDetail';
import { useParams } from 'react-router-dom';
import { fetchHackathonById, deleteHackathon } from '../services/hackathonService';

const HackathonPage = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = React.useState(null);

  React.useEffect(() => {
    const loadHackathon = async () => {
      const data = await fetchHackathonById(id);
      setHackathon(data);
    };
    loadHackathon();
  }, [id]);

  const handleDelete = async () => {
    await deleteHackathon(id);
    // navigate to home page or refresh the list
  };

  return (
    <div>
      {hackathon ? (
        <HackathonDetail hackathon={hackathon} onDelete={handleDelete} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HackathonPage;
