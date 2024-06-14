import PropTypes from 'prop-types';

function EmailStep({ email, setEmail, onNext }) {
  return (
    <div>
      <p>Authenticate Guest</p>
      <label htmlFor="email">
        Input your Email
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </label>
      <button type="button" onClick={onNext}>Submit</button>
    </div>
  );
}

EmailStep.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default EmailStep;
