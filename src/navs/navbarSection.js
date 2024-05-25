import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-black.png';

// NavSection component for the navigation bar
function NavSection() {
  return (
    <div className="navsection">
      {/* Logo Section */}
      <NavLink to="/" className="logoSection">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {/* Menu Section */}
      <div className="menuSection">
        {/* Menu items section */}
        <section>
          {/* Link to Events page */}
          <a href="v.com">
            <i className="material-icons registered-events-icon">event_available</i>
            <span>Events</span>
          </a>

          {/* Link to Registered Events page */}
          <a href="v.com">
            <i className="material-icons registered-events-icon">event_available</i>
            <span>Seats</span>
          </a>

          {/* Link to Organizers page */}
          <a href="v.com">
            <i className="material-icons registered-events-icon">event_available</i>
            <span>Organizers</span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default NavSection;
