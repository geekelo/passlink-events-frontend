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
import '../../stylesheets/mobile-tablets/filterSection.css';

function FilterSection() {
  const toggleFilterSection = () => {
    const filterFields = document.getElementsByClassName('filterFields')[0];
    filterFields.classList.toggle('hideFilter');
  };

  return (
    <div className="filterContainter">
      <div className="filterFields">
        <div className="formfields-sections">
          <p>
            <FontAwesomeIcon icon={faSearch} />
            &nbsp;
            Event Name:
          </p>
          <label htmlFor="search" aria-controls="search" className="filterSection">
            <FontAwesomeIcon icon={faFilter} />
            <input
              className="fieldInput"
              id="search"
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </label>
        </div>
        <div className="formfields-sections">
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;
            Date:
          </p>
          <label htmlFor="date" aria-controls="date" className="filterSection">
            <FontAwesomeIcon icon={faFilter} />
            <input
              className="fieldInput"
              id="date"
              name="date"
              type="date"
              aria-label="date"
            />
            <FontAwesomeIcon icon={faMinus} />
            <input
              className="fieldInput"
              id="second-date"
              name="second-date"
              type="date"
              aria-label="Second-date"
            />
          </label>
        </div>
        <div className="formfields-sections">
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;
            Location:
          </p>
          <label htmlFor="location" className="filterSection">
            <FontAwesomeIcon icon={faFilter} />
            <select id="location" name="location" className="fieldSelect">
              <option disabled>LOCATION</option>
              <option value="all">All</option>
              <option value="Onsite">Onsite</option>
              <option value="Offsite">Offsite</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <button type="button" className="filterButton" onClick={toggleFilterSection}>
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
