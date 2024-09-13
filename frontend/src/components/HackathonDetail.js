import React from 'react';
import { useNavigate } from 'react-router-dom';

const HackathonDetail = ({ hackathon, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${hackathon.id}`);
  };

  const handleDelete = () => {
    onDelete(hackathon.id);
  };

  return (
    <div>
      <h1>{hackathon.name}</h1>
      <img src={hackathon.image} alt={hackathon.name} />
      <p>{hackathon.description}</p>
      <p>{`Start Date: ${hackathon.startDate}`}</p>
      <p>{`End Date: ${hackathon.endDate}`}</p>
      <p>{`Level: ${hackathon.level}`}</p>
      <p>{`Status: ${hackathon.status}`}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default HackathonDetail;
