import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faMicrophone,
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
        <p className="date">
          <FontAwesomeIcon icon={faCalendar} />
          12-11-2024
        </p>
        <p className="time">
          <FontAwesomeIcon icon={faClock} />
          3:00pm
        </p>
        <p>View</p>
      </div>
    </div>
  );
}

export default EventCard;
// Path: src/components/events/eventCards.js
