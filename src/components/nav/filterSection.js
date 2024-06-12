import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faSearch,
  faMinus,
  faLocationDot,
  faCalendarAlt,
  faFilter,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/desktop/hideDateIcon.css';
import '../../stylesheets/desktop/filterSection.css';
import '../../stylesheets/mobile-tablets/filterSection.css';

function FilterSection() {
  // State to track whether the filter section is visible or hidden
  const [filterSectionState, setFilterSectionState] = useState('yes');

  // Function to toggle the visibility of the filter section
  const toggleFilterSection = () => {
    const filterFields = document.getElementsByClassName('filterFields')[0];
    const filterFieldsClassArray = filterFields.classList;
    filterFieldsClassArray.toggle('hideFilterAnimmation');

    // If the filter section is being hidden, use a timeout to set display
    // to 'none' after the fade-out animation
    if (filterFieldsClassArray.contains('hideFilterAnimmation') || filterSectionState === 'no') {
      setTimeout(() => {
        filterFieldsClassArray.add('hideFilter');
      }, 800); // Adjust the timeout duration to match the animation duration
      setFilterSectionState('yes');
    } else {
      // If the filter section is being shown, set display to 'flex' and
      // trigger the slide-down animation
      filterFieldsClassArray.remove('hideFilter');
      setFilterSectionState('no');
    }
  };

  return (
    <div className="filterContainter">
      <div className="filterFields hideFilter">
        <div className="formfields-sections">
          <p>
            <FontAwesomeIcon icon={faSearch} />
            &nbsp; Event Name:
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
            &nbsp; Date:
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
            &nbsp; Location:
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
          {
            filterSectionState === 'yes'
              ? (<FontAwesomeIcon icon={faSearch} />)
              : (<FontAwesomeIcon icon={faEyeSlash} />)
          }
          &nbsp;Filter
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
