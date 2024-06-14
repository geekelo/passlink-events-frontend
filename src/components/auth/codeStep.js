import PropTypes from 'prop-types';

function CodeStep({ code, setCode, onSubmit }) {
  return (
    <div>
      <p>Enter the code sent to your email</p>
      <label htmlFor="code">
        Input the code
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code"
        />
      </label>
      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  );
}

CodeStep.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CodeStep;
