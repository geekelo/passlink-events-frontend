import FilterSection from '../nav/filterSection';
import EventCard from './eventCard';
import '../../stylesheets/desktop/eventPage.css';
import events from '../../data/events.json';

function EventsPage() {
  const eventData = events.data;
  return (
    <div className="eventsPage">
      <div className="filter-section">
        {
          eventData.map((event) => (<FilterSection
            key={event.id}
            event={event}
          />))
        }
      </div>
      <div>
        <EventCard />
      </div>
    </div>
  );
}

export default EventsPage;
