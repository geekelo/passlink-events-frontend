import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function EmailStep({ email, setEmail, onNext }) {
  return (
    <div className="authStep">
      <h2>LOGIN</h2>
      <label htmlFor="email" className="authAction">
        Email:
        <input
          className="authInput"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your Email correctly"
        />
      </label>
      <button
        type="button"
        onClick={onNext}
        className="authBtn"
        disabled={!email.includes('@')}
      >
        NEXT
        &nbsp;
        <FontAwesomeIcon icon={faArrowRight} className="authBtnIcon" />
      </button>
    </div>
  );
}

EmailStep.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default EmailStep;
