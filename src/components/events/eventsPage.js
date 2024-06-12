import FilterSection from '../nav/filterSection';
import EventCard from './eventCard';
import '../../stylesheets/mobile-tablets/eventPage.css';
import '../../stylesheets/desktop/eventPage.css';
import events from '../../data/events.json';

function EventsPage() {
  const eventData = events.data.events;

  return (
    <div className="eventsPage">
      <div className="filter-section">
        <FilterSection />
      </div>
      <div className="break">
        &nbsp;
      </div>
      <div className="events-section">
        {
          eventData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))
        }
      </div>
    </div>
  );
}

export default EventsPage;
