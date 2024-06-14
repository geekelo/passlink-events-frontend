import React, { useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailStep = lazy(() => import('./emailStep'));
const CodeStep = lazy(() => import('./codeStep'));

function Auth() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    // Simulate sending a verification code to the email
    console.log(`Sending verification code to ${email}`);
    setStep(2);
  };

  const handleCodeSubmit = () => {
    // Simulate verifying the code
    if (code === '1234') { // Assume '1234' is the correct code for demonstration
      localStorage.setItem('authToken', 'your-token');
      navigate('/seats');
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  return (
    <div className="auth">
      <Suspense fallback={<div>Loading...</div>}>
        {step === 1 && (
          <EmailStep
            email={email}
            setEmail={setEmail}
            onNext={handleEmailSubmit}
          />
        )}
        {step === 2 && (
          <CodeStep
            code={code}
            setCode={setCode}
            onSubmit={handleCodeSubmit}
          />
        )}
      </Suspense>
    </div>
  );
}

export default Auth;
