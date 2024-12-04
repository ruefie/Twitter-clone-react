import React, { useEffect, useState } from "react";
import trendsData from "../data/trends.json"; // Adjust the path as needed
import styles from "./WhatsHappening.module.css";

const WhatsHappening = ({ setSearchQuery }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // Simulating fetching from trends.json
    setTrends(trendsData);
  }, []);

  const handleClick = (text) => {
    setSearchQuery(text); // Pass the clicked trend to the parent component
  };

  return (
    <div className={styles.whatsHappening}>
      <h2>What's Happening</h2>
      <ul>
        {trends.map((trend) => (
          <li key={trend.id} onClick={() => handleClick(trend.text)}>
            {trend.type === "hashtag" ? (
              <span className={styles.hashtag}>{trend.text}</span>
            ) : (
              trend.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatsHappening;
