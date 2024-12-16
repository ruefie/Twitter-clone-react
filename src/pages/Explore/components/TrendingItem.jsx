import React from 'react';
import styles from './TrendingItem.module.css';

const TrendingItem = ({ title, category, posts, image }) => (
  <div className={styles.item}>
    <div className={styles.content}>
      <div className={styles.info}>
        <span className={styles.category}>{category} · Trending</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.posts}>{posts.toLocaleString()} posts</span>
      </div>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
      )}
    </div>
    <button className={styles.moreButton}>
      <i className="fa-solid fa-ellipsis"></i>
    </button>
  </div>
);

export default TrendingItem;