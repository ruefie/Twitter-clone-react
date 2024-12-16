import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './Settings.module.css';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('account');

  const settingsSections = [
    { id: 'account', label: 'Your Account' },
    { id: 'security', label: 'Security and Account Access' },
    { id: 'privacy', label: 'Privacy and Safety' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'accessibility', label: 'Accessibility, Display, and Languages' },
    { id: 'additional', label: 'Additional Resources' }
  ];

  const accountSettings = [
    { id: 'info', label: 'Account Information', description: 'See your account information like your phone number and email address.' },
    { id: 'password', label: 'Change your password', description: 'Change your password at any time.' },
    { id: 'download', label: 'Download an archive of your data', description: 'Get insights into the type of information stored for your account.' },
    { id: 'deactivate', label: 'Deactivate your account', description: 'Find out how you can deactivate your account.' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <ArrowLeft className={styles.backIcon} />
              <h1>Settings</h1>
            </div>
          </div>

          <div className={styles.settingsContent}>
            <div className={styles.sidebar}>
              {settingsSections.map(section => (
                <button
                  key={section.id}
                  className={`${styles.sectionButton} ${activeSection === section.id ? styles.active : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div className={styles.settingsMain}>
              <h2>Your Account</h2>
              <p className={styles.sectionDescription}>
                See information about your account, download an archive of your data, or learn about your account deactivation options
              </p>

              <div className={styles.settingsList}>
                {accountSettings.map(setting => (
                  <button key={setting.id} className={styles.settingItem}>
                    <div className={styles.settingInfo}>
                      <h3>{setting.label}</h3>
                      <p>{setting.description}</p>
                    </div>
                    <ArrowLeft className={styles.arrowIcon} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;