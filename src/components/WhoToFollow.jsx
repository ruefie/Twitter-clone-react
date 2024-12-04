import React, { useState } from "react";
import styles from "./WhoToFollow.module.css";

// Import user data
import usersData from "../data/usersData.json";

const WhoToFollow = () => {
  const [visibleUsers, setVisibleUsers] = useState(4); // Number of users to display initially

  // Handler to show more users
  const handleShowMore = () => {
    setVisibleUsers((prevCount) => prevCount + 4);
  };

  return (
    <div className={styles.whoToFollow}>
      <h2>Who to Follow</h2>
      <p>Find people you know and follow them to see their posts.</p>

      {/* Render user profiles */}
      {usersData.slice(0, visibleUsers).map((user) => (
        <div key={user.id} className={styles.profile}>
          <img src={user.profile_image} alt={user.name} className={styles.avatar} />
          <div className={styles.userInfo}>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.username}>{user.username}</p>
          </div>
          <button className={styles.followButton}>Follow</button>
        </div>
      ))}

      {/* Show More Button */}
      {visibleUsers < usersData.length && (
        <button className={styles.showMoreButton} onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default WhoToFollow;
