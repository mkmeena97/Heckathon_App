const API_URL = 'http://localhost:8080/api/hackathons';

export const fetchHackathons = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchHackathonById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createHackathon = async (hackathon) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hackathon),
  });
  return response.json();
};

export const updateHackathon = async (id, hackathon) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hackathon),
  });
  return response.json();
};

export const deleteHackathon = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
