import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LoginHero from './components/LoginHero';
import { mockUsers } from '../../data/mockUsers';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (credentials) => {
    const user = mockUsers.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // In a real app, you'd handle auth tokens here
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.container}>
      
      <LoginHero />
      <LoginForm onLogin={handleLogin} error={error} />
    </div>
  );
};

export default Login;