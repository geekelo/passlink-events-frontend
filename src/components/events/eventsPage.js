import FilterSection from '../nav/filterSection';
import EventCard from './eventCard';
import '../../stylesheets/mobile-tablets/eventPage.css';
import '../../stylesheets/desktop/eventPage.css';
import events from '../../data/events.json';

function EventsPage() {
  // Extracting event data from the imported events JSON file
  const eventData = events.data.events;

  return (
    <div className="eventsPage">
      {/* Filter section at the top of the events page */}
      <div className="filter-section">
        <FilterSection />
      </div>
      <div className="break">
        &nbsp; {/* Adds a break or spacer between filter section and events section */}
      </div>
      <div className="events-section">
        {/* Mapping through the event data and rendering an EventCard for each event */}
        {
          eventData.map((event) => (
            <EventCard
              key={event.id} // Unique key for each event card
              event={event} // Passing event data as a prop to EventCard component
            />
          ))
        }
      </div>
    </div>
  );
}

export default EventsPage;
