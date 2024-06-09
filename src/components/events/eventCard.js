import '../../stylesheets/desktop/eventCard.css';

function EventCard() {
  return (
    <div className="eventCardContainer">
      <div>
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>Organizers</p>
      </div>
      <div>
        <p>LOCATION</p>
        <p>DATE</p>
        <p>TIME</p>
        <p>View</p>
      </div>
    </div>
  );
}

export default EventCard;
// Path: src/components/events/eventCards.js
