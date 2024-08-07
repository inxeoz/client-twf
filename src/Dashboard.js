import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setError('Failed to fetch user data');
          navigate('/login'); // Redirect to login if token is invalid
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Dashboard;
