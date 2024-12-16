import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContent}>
        <div className={styles.header}>
          <img 
            src="/src/assets/announcement.png" 
            alt="Shout Out Logo" 
            className={styles.logo}
          />
          <h1>Sign in to Shout Out!</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign in
          </button>
        </form>

        <div className={styles.footer}>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;