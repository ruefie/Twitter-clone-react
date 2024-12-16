import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './ProfileHeader.module.css';

const ProfileHeader = ({ name, postsCount }) => (
  <div className={styles.headerContainer}>
    <div className={styles.header}>
      <ArrowLeft className={styles.backIcon} />
      <div className={styles.headerInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.postsCount}>{postsCount} posts</p>
      </div>
    </div>
  </div>
);

export default ProfileHeader;