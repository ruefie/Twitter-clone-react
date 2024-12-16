import React from 'react';
import styles from './ProfileTabs.module.css';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Posts", "Replies", "Highlights", "Media", "Likes"];
  
  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;