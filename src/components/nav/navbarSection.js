import { NavLink } from 'react-router-dom';
import '../../stylesheets/desktop/navbarSection.css';
import '../../stylesheets/mobile-tablets/navbarSection.css';
import logo from '../../assets/logo-black.png';

// NavSection component for the navigation bar
function NavSection() {
  const openMenu = () => {
    document.querySelector('.menuSection').classList.remove('hide');
    document.querySelector('.menuSection').classList.add('show');
    document.querySelector('.menu-open').classList.remove('show');
    document.querySelector('.menu-open').classList.add('hide');

    document.querySelector('.menu-close').classList.remove('hide');
    document.querySelector('.menu-close').classList.add('show');
  };

  const closeMenu = () => {
    document.querySelector('.menuSection').classList.remove('show');
    document.querySelector('.menuSection').classList.add('hide');

    document.querySelector('.menu-open').classList.add('show');
    document.querySelector('.menu-open').classList.remove('hide');

    document.querySelector('.menu-close').classList.add('hide');
    document.querySelector('.menu-close').classList.remove('show');
  };

  return (
    <div className="navsection">
      {/* Logo Section */}
      <NavLink to="/" className="logoSection">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>

      {/* Menu icons */}
      <div className="menuIcon-Section">
        <button type="button" onClick={openMenu} className="menu-btn">
          <i className="material-icons menu-icons menu-open show">menu</i>
        </button>
        <button type="button" onClick={closeMenu} className="menu-btn">
          <i className="material-icons menu-icons menu-close hide">clear_all</i>
        </button>
      </div>

      {/* Menu Section */}
      <div className="menuSection hide">
        {/* Menu items section */}
        <section className="menuLinks-Section">
          {/* Link to Events page */}
          <a href="https://passlink.geekelo.com.ng" className="menuLinks">
            <i className="material-icons menuLinks-icons">home</i>
            <span>&nbsp;Home</span>
          </a>

          {/* Link to Events page */}
          <NavLink to="/events" className="menuLinks">
            <i className="material-icons menuLinks-icons">calendar_month</i>
            <span>&nbsp;Events</span>
          </NavLink>

          {/* Link to Registered Events page */}
          <NavLink to="/seats" className="menuLinks">
            <i className="material-icons menuLinks-icons">event_seat</i>
            <span>&nbsp;Seats</span>
          </NavLink>

          {/* Link to Organizers page */}
          <NavLink to="/organizers" className="menuLinks">
            <i className="material-icons menuLinks-icons">settings_accessibility</i>
            <span>&nbsp;Organizers</span>
          </NavLink>
        </section>
      </div>
      {/* Token  */}
      <section className="token-section">
        <button type="button" className="token-btn">
          <i className="material-icons token-icon">key</i>
        </button>
      </section>
    </div>
  );
}

export default NavSection;
