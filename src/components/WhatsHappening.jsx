import React from 'react';
import { trendingData } from '../data/trendingData';
import styles from './WhatsHappening.module.css';

const WhatsHappening = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What's happening</h2>
      <div className={styles.trendingList}>
        {trendingData.slice(0, 5).map((trend) => (
          <div key={trend.id} className={styles.trendingItem}>
            <div className={styles.content}>
              <div className={styles.info}>
              {/* {trend.image && (
                <div className={styles.imageContainer}>
                  <img src={trend.image} alt={trend.title} />
                </div>
              )} */}
                <span className={styles.category}>{trend.category}</span>
                <h3 className={styles.title}>{trend.title}</h3>
                <span className={styles.posts}>{trend.posts.toLocaleString()} posts</span>
              </div>
             
            </div>
            <button className={styles.moreButton}>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        ))}
      </div>
      <a href="/explore" className={styles.showMore}>Show more</a>
    </div>
  );
};

export default WhatsHappening;