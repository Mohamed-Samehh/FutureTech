import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PodcastPage from './PodcastPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<PodcastPage />} />
              {/* 7oto be2et al components hena */}
          </Routes>
      </Router>
  );
}

export default App;
