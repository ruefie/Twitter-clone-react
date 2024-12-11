import React, { useState, useContext } from "react";
import styles from "./ShoutOut.module.css";
import Lottie from "lottie-react";
import heartAnimation from "../data/heartAnimation";
import { ShoutOutContext } from "../context/ShoutOutContext";
import CommentModal from "../modal/CommentModal";

// Utility function to format the date
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
};

const ShoutOut = ({
  id,
  profile_image,
  name,
  username,
  content,
  media,
  date,
  reshouted,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { openReshoutModal } = useContext(ShoutOutContext);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  


  const handleHeartClick = () => {
    setIsClicked(!isClicked);
  };

  const handleReshout = () => {
    openReshoutModal({
      id,
      profile_image,
      name,
      username,
      content,
      media,
      date,
    });
  };

  const handleCommentClick = () => {
    setIsCommentModalOpen(true);
  };

  return (
    <ul className={styles.container}>
      {reshouted && (
          <div className={styles.reshoutedHeader}>
            <i className="fa-solid fa-retweet" /> 
            <span>You Reshouted</span>
          </div>
        )}
      <li className={styles.shoutOutItem}>
        {/* Reshouted Header */}
        

        {/* Profile Header */}
        <img
          src={profile_image}
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

          {/* Reshouted Content */}
          {reshouted ? (
            <div className={styles.reshoutedContent}>
              <p className={styles.content}>{content}</p>
              <div className={styles.originalPost}>
                <div className={styles.originalHeader}>
                  <img
                    src={reshouted.profile_image}
                    alt={`${reshouted.name}'s avatar`}
                    className={styles.originalAvatar}
                  />
                  <div className={styles.originalProfile}>
                    <p className={styles.originalName}>{reshouted.name}</p>
                    <p className={styles.originalUsername}>
                      {reshouted.username}
                    </p>
                    <p className={styles.originalDate}>
                      {formatDate(reshouted.date)}
                    </p>
                  </div>
                </div>
                <p className={styles.originalContent}>{reshouted.content}</p>
                {reshouted.media && (
                  <img
                    src={reshouted.media}
                    alt="Original media"
                    className={styles.media}
                  />
                )}
              </div>
            </div>
          ) : (
            // Original Post Content
            <div className={styles.contentContainer}>
              <p className={styles.content}>{content}</p>
              {media && (
                <img src={media} alt="Post media" className={styles.media} />
              )}
            </div>
          )}
        </div>
      </li>

      {/* Action Icons section */}
      <div className={styles.iconContainer}>
        <div className={styles.iconInfo} data-tooltip="Comment">
          <i className="fa-regular fa-comment" onClick={handleCommentClick}></i>
          <span>60</span>
        </div>
{/* Comment Modal */}
{isCommentModalOpen && (
        <CommentModal
          isOpen={isCommentModalOpen}
          onClose={() => setIsCommentModalOpen(false)}
          postId={id}
          postDetails={{
            profile_image,
            name,
            username,
            content,
            media,
            date,
            reshouted,
          }}
        />
      )}

        <div className={styles.iconInfo} data-tooltip="Reshout">
          <i
            className="fa-solid fa-retweet"
            data-tooltip="Reshout"
            onClick={handleReshout}
          ></i>
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
        <div className={styles.bookmarkForward}>
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
