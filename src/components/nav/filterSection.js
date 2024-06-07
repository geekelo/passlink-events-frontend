import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMinus,
  faLocationDot,
  faCalendarAlt,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/desktop/hideDateIcon.css';
import '../../stylesheets/desktop/filterSection.css';

function FilterSection() {
  return (
    <div className="filterContainter">
      <div className="filterFields">
        <div>
          <p>
            <FontAwesomeIcon icon={faSearch} />
            &nbsp;
            Event Name:
          </p>
          <label htmlFor="search" aria-controls="search">
            <FontAwesomeIcon icon={faFilter} />
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </label>
        </div>
        <div className="date">
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;
            Date:
          </p>
          <label htmlFor="date" aria-controls="date">
            <FontAwesomeIcon icon={faFilter} />
            <input
              id="date"
              name="date"
              type="date"
              aria-label="date"
            />
            <FontAwesomeIcon icon={faMinus} />
            <input
              id="second-date"
              name="second-date"
              type="date"
              aria-label="Second-date"
            />
          </label>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;
            Location:
          </p>
          <label htmlFor="location">
            <FontAwesomeIcon icon={faFilter} />
            <select id="location" name="location">
              <option disabled>LOCATION</option>
              <option value="all">All</option>
              <option value="Onsite">Onsite</option>
              <option value="Offsite">Offsite</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
