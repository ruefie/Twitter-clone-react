import React from 'react';
import PremiumHeader from './components/PremiumHeader';
import PremiumTier from './components/PremiumTier';
import styles from './Premium.module.css';

const Premium = () => {
  const premiumTiers = [
    {
      name: 'Premium',
      price: 8,
      features: [
        'Prioritized rankings in conversations',
        'See approximately twice as many posts between ads',
        'Edit post feature',
        'Post longer videos',
        'Download videos',
        'Reader mode',
        'Custom app icons',
        'Customize your navigation',
      ],
    },
    {
      name: 'Premium+',
      price: 16,
      features: [
        'All Premium features',
        'No ads in For You and Following timelines',
        'Largest boost to your replies',
        'Access to creator hub',
        'Earnings from ads in replies',
        'Premium features on other platforms',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <PremiumHeader />
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>Premium Features</h2>
          <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        </div>
        <div className={styles.tiers}>
          {premiumTiers.map((tier, index) => (
            <PremiumTier key={index} tier={tier} />
          ))}
        </div>
        <div className={styles.disclaimer}>
          <p>By subscribing you agree to our Terms of Service and Privacy Policy. Subscriptions auto-renew until canceled, as described in our Terms. Cancel anytime. A verified phone number is required to subscribe.</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;