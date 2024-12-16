import React from 'react';
import SearchBar from '../../components/SearchBar';
import Subscribe from '../../components/Subscribe';
import WhoToFollow from '../../components/WhoToFollow';
import WhatsHappening from '../../components/WhatsHappening';
import { ArrowLeft } from 'lucide-react';
import styles from './Communities.module.css';

const Communities = () => {
  const categories = ['Sports', 'Technology', 'Art', 'Entertainment', 'Gaming', 'Politics'];
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <ArrowLeft className={styles.backIcon} />
              <h1>Communities</h1>
            </div>
          </div>
          
          <div className={styles.categories}>
            {categories.map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>

          <div className={styles.communitiesContent}>
            <div className={styles.emptyState}>
              <h2>Find your communities</h2>
              <p>Communities are groups of people who come together to discuss their interests.</p>
              <button className={styles.discoverButton}>Discover communities</button>
            </div>
          </div>
        </main>
        
        <aside className={styles.sideSection}>
          <SearchBar />
          <Subscribe />
          <WhoToFollow />
          <WhatsHappening />
        </aside>
      </div>
    </div>
  );
};

export default Communities;