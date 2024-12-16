import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import SearchBar from '../../components/SearchBar';
import WhoToFollow from '../../components/WhoToFollow';
import WhatsHappening from '../../components/WhatsHappening';
import styles from './Notifications.module.css';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Verified', 'Mentions'];
  
  const notifications = [
    {
      id: 1,
      date: 'Dec 15, 2024',
      message: 'There was a login to your account @RRoell50065 from a new device on Dec 15, 2024. Review it now.',
    },
    {
      id: 2,
      date: 'Dec 12, 2024',
      message: 'There was a login to your account @RRoell50065 from a new device on Dec 12, 2024. Review it now.',
    },
    // Add more notifications as needed
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <div className={styles.header}>
            <h1>Notifications</h1>
            <Settings className={styles.settingsIcon} />
          </div>
          
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.notificationsList}>
            {notifications.map((notification) => (
              <div key={notification.id} className={styles.notificationItem}>
                <div className={styles.notificationIcon}>  <img src="src/assets/announcement.png" alt="" /></div>
                <div className={styles.notificationContent}>
                  <p>{notification.message}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        <aside className={styles.sideSection}>
          <SearchBar />
          <WhoToFollow />
          <WhatsHappening />
        </aside>
      </div>
    </div>
  );
}

export default Notifications;