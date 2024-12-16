import React, { useState } from 'react';
import ExploreHeader from './components/ExploreHeader';
import ExploreTabs from './components/ExploreTabs';
import TrendingList from './components/TrendingList';
import SearchBar from '../../components/SearchBar';
import WhoToFollow from '../../components/WhoToFollow';
import styles from './Explore.module.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <ExploreHeader />
          <ExploreTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <TrendingList category={activeTab.toLowerCase()} />
        </main>
        
        <aside className={styles.sideSection}>
          <WhoToFollow />
        </aside>
      </div>
    </div>
  );
};

export default Explore;