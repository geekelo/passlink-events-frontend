import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterSection from '../nav/filterSection';

function SeatsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/verify');
    }
  }, [navigate]);

  return (
    <div className="seatsPage">
      <FilterSection />
      <div>
        <p>SEATS</p>
      </div>
    </div>
  );
}

export default SeatsPage;
