import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons';

function CodeStep({ onBack, setCode, onSubmit }) {
  const [inputs, setInputs] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (value.length > 1) return; // Ensure only one character is allowed

    setInputs((prevInputs) => {
      const newInputs = { ...prevInputs, [id]: value };
      const concatenatedCode = Object.values(newInputs).join('');
      setCode(concatenatedCode);
      return newInputs;
    });
  };

  return (
    <div className="authStep">
      <h2>
        <FontAwesomeIcon icon={faUnlock} />
        &nbsp;
        Check your Email for 8-digit Code
      </h2>
      <div className="authAction">
        <input
          className="authCodeInput"
          id="code1"
          type="text"
          value={inputs.code1}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />

        <input
          className="authCodeInput"
          id="code2"
          type="text"
          value={inputs.code2}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />

        <input
          className="authCodeInput"
          id="code3"
          type="text"
          value={inputs.code3}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />

        <input
          className="authCodeInput"
          id="code4"
          type="text"
          value={inputs.code4}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />

        <input
          className="authCodeInput"
          id="code5"
          type="text"
          value={inputs.code5}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />

        <input
          className="authCodeInput"
          id="code6"
          type="text"
          value={inputs.code6}
          onChange={handleInputChange}
          placeholder="0"
          aria-label="password"
        />
      </div>
      <div className="buttonSection">
        <button type="button" onClick={onBack} className="backBtn">
          <FontAwesomeIcon icon={faArrowLeft} className="authBtnIcon" />
          &nbsp;
          &nbsp;
          Back
        </button>

        <button type="button" onClick={onSubmit} className="authBtn">
          Submit
          &nbsp;
          <FontAwesomeIcon icon={faArrowRight} className="authBtnIcon" />
        </button>
      </div>
    </div>
  );
}

CodeStep.propTypes = {
  onBack: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CodeStep;
