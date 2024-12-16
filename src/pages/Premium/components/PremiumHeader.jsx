import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PremiumHeader.module.css';

const PremiumHeader = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer} onClick={() => navigate('/home')}>
        <img src="src/assets/announcement.png" alt="ShoutOut Logo" className={styles.logo} />
      </div>
      <h1>ShoutOut Premium</h1>
    </div>
  );
};

export default PremiumHeader;