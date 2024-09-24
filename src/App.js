import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastPage from './PodcastPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<PodcastPage />} />
              <Route path="/podcasts" element={<PodcastPage />} />
          </Routes>
      </Router>
  );
}

export default App;
