import React, { useState , useContext} from "react";
import styles from "./ShoutOut.module.css";
import Lottie from "lottie-react";
import heartAnimation from "../data/heartAnimation";
import { ShoutOutContext } from "../context/ShoutOutContext";

// Utility function to format the date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
};

const ShoutOut = ({ profileImage, name, username, content, media, date, id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const {reshout} = useContext(ShoutOutContext);

  const handleHeartClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2500);
  };

  // const handleReshout = () => {
  //   const reshoutedText = `Reshouted by ${username || "Anonymous"}: ${shoutout.text}`;
  //   addShoutout({...shoutout, text: reshoutedText, isReshout: true});

    
  // };

  const handleReshout = () => {
    const shoutout = {
      id, // Pass the original shoutout ID
      profileImage,
      name,
      username,
      content,
      media,
      date,
    }
    reshout(shoutout);
  }

  return (
    <ul className={styles.container}>
      <li className={styles.shoutOutItem}>
        <img
          src={profileImage}
          alt={`${name}'s avatar`}
          className={styles.avatar}
        />
        <div className={styles.userContainer}>
          <div className={styles.profileHeader}>
            <div className={styles.userInfo}>
              <p className={styles.name}>{name}</p>
              <p className={styles.username}>{username}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <p className={styles.content}>{content}</p>
          {media && (
            <img src={media} alt="ShoutOut media" className={styles.media} />
          )}
        </div>
      </li>
      <div className={styles.iconContainer}>
        <div className={styles.iconInfo} data-tooltip="Comment">
          <i className="fa-regular fa-comment"></i>
          <span>60</span>
        </div>
        <div className={styles.iconInfo} data-tooltip="Reshout">
          <i className="fa-solid fa-retweet" data-tooltip="Reshout" onClick={handleReshout}></i>
          <span>1k</span>
        </div>
        <div className={styles.iconInfo} data-tooltip="Like">
          <div className={styles.lottieWrapper} onClick={handleHeartClick}>
            {isClicked ? (
              <Lottie
                animationData={heartAnimation}
                loop={false}
                play={isClicked}
                style={{ width: 90, height: 90 }}
              />
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <span>5k</span>
        </div>
        <div className={styles.iconInfo} data-tooltip="Views">
          <i className="fa-solid fa-chart-simple"></i>
          <span>1.3M</span>
        </div>
        <div className={styles.bookmarkForward} >
          <div className={styles.iconForward} data-tooltip="Bookmark">
            <i className="fa-regular fa-bookmark"></i>
          </div>

          <div className={styles.iconShare} data-tooltip="Share">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default ShoutOut;
