import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createHackathon, updateHackathon, fetchHackathonById } from '../services/hackathonService'; // Update here


const HackathonForm = () => {
  const [hackathon, setHackathon] = useState({ name: '', startDate: '', endDate: '', description: '', image: '', level: '', status: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const loadHackathon = async () => {
        const data = await fetchHackathonById(id);
        setHackathon(data);
      };
      loadHackathon();
    }
  }, [id]);
  

  const handleChange = (event) => {
    setHackathon({ ...hackathon, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id) {
      await updateHackathon(id, hackathon);
    } else {
      await createHackathon(hackathon);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={hackathon.name} onChange={handleChange} placeholder="Name" />
      <input type="date" name="startDate" value={hackathon.startDate} onChange={handleChange} />
      <input type="date" name="endDate" value={hackathon.endDate} onChange={handleChange} />
      <textarea name="description" value={hackathon.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="text" name="image" value={hackathon.image} onChange={handleChange} placeholder="Image URL" />
      <select name="level" value={hackathon.level} onChange={handleChange}>
        <option value="">Select Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select name="status" value={hackathon.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
      </select>
      <button type="submit">{id ? 'Update' : 'Create'} Hackathon</button>
    </form>
  );
};

export default HackathonForm;
