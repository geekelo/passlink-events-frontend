import FilterSection from '../nav/filterSection';
import EventCard from './eventCard';

function EventsPage() {
  return (
    <div className="eventsPage">
      <div className="filter-section">
        <FilterSection />
      </div>
      <div>
        <EventCard />
      </div>
    </div>
  );
}

export default EventsPage;
