import React from 'react';
import NavbarSection from './navs/navbarSection';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/organizers" element={<Organizers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
