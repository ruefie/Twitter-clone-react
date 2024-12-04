import React, { useState, useContext } from "react";
import styles from "./ShoutOutInput.module.css";
import { ShoutOutContext } from "../context/ShoutOutContext";

const ShoutOutInput = ({ isModal, closeModal }) => {
  const [shoutoutText, setShoutoutText] = useState("");
  const { addShoutout } = useContext(ShoutOutContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shoutoutText.trim()) {
    addShoutout(shoutoutText);
    console.log("Shout Out sent:", shoutoutText);
    setShoutoutText("");
    if (closeModal) {
      closeModal();}
  };
}

  const handleInputChange = (e) => {
    setShoutoutText(e.target.value);

  };

  return (
    <div className={`${styles.container} ${isModal ? styles.modalContainer: ""}`}>
      <img
        src="https://via.placeholder.com/30" // Placeholder for the avatar
        alt="Avatar"
        className={styles.avatar}
      />
      <div className={styles.shoutoutForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.topRow}>
            <input
              type="text"
              value={shoutoutText}
              onChange={handleInputChange}
              placeholder="What's up?"
              maxLength={280}
            />
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icons}>
              <i className="fa-solid fa-image"></i>
              <i className="fa-solid fa-video"></i>
              <i className="fa-regular fa-face-smile"></i>
              <i className="fa-solid fa-list-ul"></i>
              <i className="fa-regular fa-calendar-plus"></i>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <button type="submit" className={styles.button}>
              Shout Out!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShoutOutInput;
