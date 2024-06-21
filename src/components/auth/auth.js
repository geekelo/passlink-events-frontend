import React, { useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../stylesheets/desktop/auth.css';

const EmailStep = lazy(() => import('./emailStep'));
const CodeStep = lazy(() => import('./codeStep'));

function Auth() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    // Simulate sending a verification code to the email
    // console.log(`Sending verification code to ${email}`);
    setStep(2);
  };

  const handleBackToEmail = () => {
    // Go back to email input step
    setStep(1);
  };

  const handleCodeSubmit = () => {
    // Simulate verifying the code
    // console.log(code);
    if (code === '123456') { // Assume '123456' is the correct code for demonstration
      localStorage.setItem('authToken', 'your-token');
      navigate('/seats');
    } else {
      toast.error('Incorrect code. Please try again.', {
        autoClose: 5000, // Duration in milliseconds
      });
    }
  };

  return (
    <div className="auth">
      <ToastContainer />
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
            onBack={handleBackToEmail}
            setCode={setCode}
            onSubmit={handleCodeSubmit}
          />
        )}
      </Suspense>
    </div>
  );
}

export default Auth;
