import React from 'react';
import SearchBar from '../../../components/SearchBar';
import styles from './ExploreHeader.module.css';

const ExploreHeader = () => (
  <div className={styles.header}>
    <SearchBar variant="explore" />
    <button className={styles.settingsButton}>
      <i className="fa-solid fa-gear"></i>
    </button>
  </div>
);

export default ExploreHeader;