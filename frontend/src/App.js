import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HackathonPage from './pages/HackathonPage';
import HackathonForm from './components/HackathonForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hackathon/:id" element={<HackathonPage />} />
      <Route path="/edit/:id" element={<HackathonForm />} />
      <Route path="/create" element={<HackathonForm />} />
    </Routes>
  </Router>
);

export default App;
