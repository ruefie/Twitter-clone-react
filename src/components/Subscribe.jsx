import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h2>Expiring soon!</h2>
      <p>Get 20% off on Premium account and experience the best features.</p>
      <button type="submit">Subscribe</button>
    </div>
  );
}

export default Subscribe;