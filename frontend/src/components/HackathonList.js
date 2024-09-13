import React, { useState, useEffect } from 'react';
import HackathonCard from './HackathonCard';
import { fetchHackathons } from '../services/hackathonService';

const HackathonList = ({ onSelectHackathon }) => {
  const [hackathons, setHackathons] = useState([]);
  const [sort, setSort] = useState('newest');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ level: '', status: '' });

  useEffect(() => {
    const loadHackathons = async () => {
      const data = await fetchHackathons();
      setHackathons(data);
    };
    loadHackathons();
  }, []);

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const filteredAndSortedHackathons = hackathons
    .filter(hackathon => hackathon.name.toLowerCase().includes(search.toLowerCase()))
    .filter(hackathon => (filter.level ? hackathon.level === filter.level : true) && (filter.status ? hackathon.status === filter.status : true))
    .sort((a, b) => (sort === 'newest' ? new Date(b.startDate) - new Date(a.startDate) : new Date(a.startDate) - new Date(b.startDate)));

  return (
    <div>
      <input type="text" placeholder="Search by name" value={search} onChange={handleSearch} />
      <select onChange={handleSort}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
      <select name="level" onChange={handleFilter}>
        <option value="">All Levels</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select name="status" onChange={handleFilter}>
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
      </select>
      <div className="hackathon-list">
        {filteredAndSortedHackathons.map(hackathon => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} onClick={onSelectHackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
