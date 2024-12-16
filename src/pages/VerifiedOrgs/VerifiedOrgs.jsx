import React from 'react';
import VerifiedOrgsHeader from './components/VerifiedOrgsHeader';
import { Building2 } from 'lucide-react';
import styles from './VerifiedOrgs.module.css';

const VerifiedOrgs = () => {
  const features = [
    'Add a gold verification badge to your organization account',
    'Affiliate other accounts with your organization',
    'Receive priority support',
    'Early access to new features',
    'Increased visibility for job postings',
  ];

  return (
    <div className={styles.container}>
      <VerifiedOrgsHeader />
      <div className={styles.content}>
        <div className={styles.intro}>
          <Building2 className={styles.orgIcon} />
          <h2>Verified Organizations</h2>
          <p>Build trust and showcase your organization's authenticity with a gold verification badge.</p>
        </div>

        <div className={styles.features}>
          <h3>With Verified Organizations you can:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <span className={styles.checkmark}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pricing}>
          <div className={styles.priceHeader}>
            <span className={styles.amount}>$1000</span>
            <span className={styles.period}>/month</span>
          </div>
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>

        <div className={styles.disclaimer}>
          <p>By subscribing you agree to our Terms of Service and Privacy Policy. Subscriptions auto-renew until canceled, as described in our Terms. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default VerifiedOrgs;