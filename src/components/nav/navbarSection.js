import { NavLink } from 'react-router-dom';
import '../../stylesheets/desktop/navbarSection.css';
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
        <section className="menuLinks-Section">
          {/* Link to Events page */}
          <NavLink to="/events" className="menuLinks">
            <i className="material-icons">calendar_month</i>
            <span>Events</span>
          </NavLink>

          {/* Link to Registered Events page */}
          <NavLink to="/seats" className="menuLinks">
            <i className="material-icons registered-events-icon">event_seat</i>
            <span>Seats</span>
          </NavLink>

          {/* Link to Organizers page */}
          <NavLink to="/organizers" className="menuLinks">
            <i className="material-icons registered-events-icon">settings_accessibility</i>
            <span>Organizers</span>
          </NavLink>
        </section>

        {/* Token  */}
        <section className="token-section">
          <button type="button" className="token-btn">
            <i className="material-icons registered-events-icon">passkey</i>
          </button>
        </section>
      </div>
    </div>
  );
}

export default NavSection;
