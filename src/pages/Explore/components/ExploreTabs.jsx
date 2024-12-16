import React from 'react';
import { trendingData } from '../../../data/trendingData';
import { getUniqueCategories } from '../utils/categoryUtils';
import styles from './ExploreTabs.module.css';

const ExploreTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['For You', 'Trending', 'News', 'Sports', 'Entertainment'];

  return (
    <nav className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default ExploreTabs;