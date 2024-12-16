import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import ShoutOutInput from "./ShoutOutInput"; 

const SideBar = ({ addShoutout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = "@ruchieroell"; // Hardcoded username for now

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          <h1>ShoutOut!</h1>
          <img src="src/assets/announcement.png" alt="" />
        </div>
        <ul className={styles.links}>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-house"></i>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-user-group"></i>
            <li>
              <Link to="/communities">Communities</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-envelope"></i>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-bell"></i>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <li>
              <Link to="/premium">Premium</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-bolt-lightning"></i>
            <li>
              <Link to="/verified-orgs">Verified Orgs</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-user"></i>
            <li>
              <Link to={`/${username}`}>Profile</Link>
            </li>
          </div>
          <div className={styles.iconLinks}>
            <i className="fa-solid fa-gear"></i>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </div>
        </ul>
        <button className={styles.post} onClick={handleModalOpen}>
          Shout Out!
        </button>
        <div className={styles.profile}>
          <img src="https://via.placeholder.com/50" alt="User Avatar" className={styles.avatar} />
          <div className={styles.user}>
            <h2>Ruchie Roell</h2>
            <p>@ruchieroell</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </nav>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={handleModalClose}>
            <i class="fa-solid fa-x"></i>
            </button>
            <span className={styles.drafts}>Drafts</span>
            <div className={styles.modalInputWrapper}>
              <ShoutOutInput addShoutout={addShoutout} isModal={true} closeModal={handleModalClose}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
