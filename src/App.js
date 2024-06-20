import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavbarSection from './components/nav/navbarSection';
import EventsPage from './components/events/eventsPage';
import SeatsPage from './components/seats/seatsPage';
import OrganizersPage from './components/organizers/organizersPage';
import FooterSection from './components/footer/footerSection';
import Auth from './components/auth/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/seats" element={<SeatsPage />} />
          <Route path="/verify" element={<Auth />} />
          <Route path="/registered-events" element={<SeatsPage />} />
          <Route path="/organizers" element={<OrganizersPage />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
