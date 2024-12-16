import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ userData }) => (
  <div className={styles.container}>
    <div className={styles.coverImage}></div>
    <div className={styles.profileContent}>
      <div className={styles.avatarContainer}>
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=default" 
          alt="User Avatar" 
          className={styles.avatar} 
        />
      </div>
      <div className={styles.editButtonContainer}>
        <button className={styles.editButton}>
          Edit profile
        </button>
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{userData.name}</h2>
        <p className={styles.username}>{userData.username}</p>
        <div className={styles.joinDate}>
          <Calendar className={styles.calendarIcon} />
          <span>Joined {userData.joinedDate}</span>
        </div>
        <div className={styles.stats}>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{userData.following}</span>
            <span className={styles.statLabel}>Following</span>
          </span>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{userData.followers}</span>
            <span className={styles.statLabel}>Followers</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileInfo;