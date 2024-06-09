import FilterSection from '../nav/filterSection';
import EventCard from './eventCard';

function EventsPage() {
  return (
    <div className="eventsPage">
      <div className="filterSection">
        <FilterSection />
      </div>
      <div>
        <EventCard />
      </div>
    </div>
  );
}

export default EventsPage;
