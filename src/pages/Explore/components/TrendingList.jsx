import React from 'react';
import TrendingItem from './TrendingItem';
import { trendingData } from '../../../data/trendingData';
import styles from './TrendingList.module.css';

const TrendingList = ({ category }) => {
  // Show all trends for "For You" tab, otherwise filter by category
  const filteredTrends = category.toLowerCase() === 'for you' 
    ? trendingData
    : trendingData.filter(trend => 
        trend.category.toLowerCase() === category.toLowerCase()
      );

  return (
    <div className={styles.list}>
      {filteredTrends.map((trend) => (
        <TrendingItem key={trend.id} {...trend} />
      ))}
    </div>
  );
};

export default TrendingList;