import React from 'react';
import { Check } from 'lucide-react';
import styles from './PremiumTier.module.css';

const PremiumTier = ({ tier }) => {
  return (
    <div className={styles.tier}>
      <div className={styles.header}>
        <h3>{tier.name}</h3>
        <p className={styles.price}>
          <span className={styles.amount}>${tier.price}</span>
          /month
        </p>
      </div>
      <ul className={styles.features}>
        {tier.features.map((feature, index) => (
          <li key={index}>
            <Check className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={styles.subscribeButton}>Subscribe</button>
    </div>
  );
};

export default PremiumTier;