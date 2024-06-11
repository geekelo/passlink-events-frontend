import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClock,
  faMicrophone,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

import '../../stylesheets/desktop/eventCard.css';

function EventCard() {
  return (
    <div className="eventCardContainer">
      <div className="col1">
        <h2 className="event-title">Global Girls in Tech Girls in Tech</h2>
        <div className="organizers">
          <div className="brand-color">&nbsp;</div>
          <i>by</i>
          <p>Organizers</p>
        </div>
        <p className="eventcard-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        </p>
        <div className="speakers">
          <FontAwesomeIcon icon={faMicrophone} />
          <p className="speaker-names">James rown, Tumbler Bryan</p>
        </div>
      </div>
      <div className="col2">
        <p className="location-tag">ONLINE</p>
        <div className="date">
          <p className="date-time-icon">
            <FontAwesomeIcon icon={faCalendarAlt} className="fa-times-thin" />
          </p>
          <div className="dateText">
            <p className="date-range">12-11-2024</p>
          </div>
        </div>
        <p className="time">
          <div className="date-time-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="time-text">
            <p>3:00PM</p>
            <p className="timezone">GMT+1</p>
          </div>
        </p>
        <div>
          <button type="button" className="reserve">
            Reserve
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
// Path: src/components/events/eventCards.js
