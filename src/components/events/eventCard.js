import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faCalendarAlt,
  faClock,
  faMicrophone,
  faChair,
} from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/mobile-tablets/eventCard.css';
import '../../stylesheets/desktop/eventCard.css';

function EventCard({ event }) {
  const {
    organizer,
    name,
    description,
    location,
    date,
    time,
    speakers,
  } = event;

  return (
    <div className="eventCardContainer">
      <div className="col1">
        <div className="organizer-section">
          <div className="brand-color">&nbsp;</div>
          <p className="organizer">{organizer}</p>
        </div>
        <h2 className="event-name">{name}</h2>
        <p className="eventcard-description">
          {description}
        </p>
        <div className="speakers">
          <FontAwesomeIcon icon={faMicrophone} />
          <p>
            {speakers.map((speaker, speakerId) => (
              <span className="speaker-names" key={speaker.id}>
                {speaker.name}
                {speakerId === speakers.length - 1 ? '.' : ', '}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="col2">
        <p className="location-tag">{location}</p>
        <div className="date">
          <p className="date-time-icon">
            <FontAwesomeIcon icon={faCalendarAlt} className="fa-times-thin" />
          </p>
          <p className="date-text">{date}</p>
        </div>
        <div className="time">
          <p className="date-time-icon">
            <FontAwesomeIcon icon={faClock} />
          </p>
          <div className="time-text">
            <p>
              {time}
              &nbsp;
              UTC+1
            </p>
          </div>
        </div>
        <div>
          <button type="button" className="reserve">
            Reserve
            <FontAwesomeIcon icon={faChair} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Define proptypes for the component
EventCard.propTypes = {
  event: PropTypes.shape({
    organizer: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default EventCard;
