import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';

const HackathonCard = ({ hackathon, onClick }) => {
  const { name, startDate, endDate, description, image, level, status } = hackathon;

  const getTimer = () => {
    const now = new Date();
    if (status === 'active') {
      return `Ends in ${formatDistanceToNow(new Date(endDate))}`;
    } else if (status === 'upcoming') {
      return `Starts in ${formatDistanceToNow(new Date(startDate))}`;
    } else {
      return `Started on ${format(new Date(startDate), 'MMM dd, yyyy')} and ended on ${format(new Date(endDate), 'MMM dd, yyyy')}`;
    }
  };

  return (
    <div className="hackathon-card" onClick={() => onClick(hackathon)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{`Level: ${level}`}</p>
      <p>{getTimer()}</p>
    </div>
  );
};

export default HackathonCard;
