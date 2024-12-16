import React, { useState, useContext, useEffect } from "react";
import styles from "./ShoutOut.module.css";
import Lottie from "lottie-react";
import heartAnimation from "../data/heartAnimation";
import { ShoutOutContext } from "../context/ShoutOutContext";
import CommentModal from "../modal/CommentModal";

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
  const { addLike, getLikes } = useContext(ShoutOutContext);
  const [likes, setLikes] = useState(getLikes(id));
  const [isClicked, setIsClicked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const { openReshoutModal, getCommentCount } = useContext(ShoutOutContext);

  useEffect(() => {
    // Update likes whenever the context changes
    setLikes(getLikes(id));
  }, [getLikes, id]);

  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    console.error("Invalid id provided to ShoutOut:", id);
    return null;
  }

  const handleHeartClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      addLike(id);

      setTimeout(() => {
        setIsClicked(false);
      }, 2500);
    }
  };

  const handleReshout = () => {
    openReshoutModal({
      id: numericId,
      profile_image,
      name,
      username,
      content,
      media,
      date,
    });
  };

  const renderMedia = (media) => {
    if (!media) return null;

    switch (media.type) {
      case "giphy":
        return (
          <iframe
            src={media.url}
            frameBorder="0"
            allowFullScreen
            title="Giphy GIF"
            className={styles.mediaGiphy}
          ></iframe>
        );
      case "video":
        return (
          <video controls className={styles.media}>
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "image":
        return (
          <img src={media.url} alt="Post media" className={styles.media} />
        );
      default:
        return null;
    }
  };

  const handleCommentClick = () => {
    setIsCommentModalOpen(true);
  };

  const commentCount = getCommentCount(numericId);

  return (
    <ul className={styles.container}>
      {reshouted && (
        <div className={styles.reshoutedHeader}>
          <i className="fa-solid fa-retweet" />
          <span>You Reshouted</span>
        </div>
      )}
      <li className={styles.shoutOutItem}>
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
                <div className={styles.originalMedia}>
                  {reshouted.media && renderMedia(reshouted.media)}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.contentContainer}>
              <p className={styles.content}>{content}</p>

              {media && renderMedia(media)}
            </div>
          )}
        </div>
      </li>
      <div className={styles.iconContainer}>
        <div className={styles.iconInfo} data-tooltip="Comment">
          <i className="fa-regular fa-comment" onClick={handleCommentClick}></i>
          <span>{commentCount}</span>
          {isCommentModalOpen && (
            <CommentModal
              isOpen={isCommentModalOpen}
              onClose={() => setIsCommentModalOpen(false)}
              postId={numericId}
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
        </div>
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
          <span>{likes}</span>
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
