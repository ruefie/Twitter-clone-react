import React from 'react';
import styles from './LoginHero.module.css';

const LoginHero = () => (
  <div className={styles.hero}>
    <div className={styles.overlay}>
      <div className={styles.content}>
        <img 
          src="/src/assets/announcement.png" 
          alt="Shout Out Logo" 
          className={styles.logo}
        />
        <h1>Shout Out!</h1>
      </div>
    </div>
  </div>
);

export default LoginHero;