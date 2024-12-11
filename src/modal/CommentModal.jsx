import React, { useContext, useState } from "react";
import { ShoutOutContext } from "../context/ShoutOutContext";
import styles from "./CommentModal.module.css";

const CommentModal = ({ isOpen, onClose, postId, postDetails }) => {
  const { comments, addComment } = useContext(ShoutOutContext);
  const [commentText, setCommentText] = useState("");

  if (!isOpen) return null;

  const handleAddComment = () => {
    addComment(postId, commentText);
    setCommentText("");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <button onClick={onClose}>&times;</button>
          <span>Drafts</span>
        </div>

        {/* Original Post */}
        <div className={styles.originalPost}>
          <div className={styles.profileHeader}>
            <img
              src={postDetails.profile_image}
              alt={`${postDetails.name}'s avatar`}
              className={styles.avatar}
            />
            <div className={styles.profileInfo}>
              <p className={styles.name}>{postDetails.name}</p>
              <p className={styles.username}>{postDetails.username}</p>
              <p className={styles.date}>
                {new Date(postDetails.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}
              </p>
            </div>
          </div>
          <p className={styles.content}>{postDetails.content}</p>
          {postDetails.media && (
            <img
              src={postDetails.media}
              alt="Post media"
              className={styles.media}
            />
          )}
          {postDetails.reshouted && (
            <div className={styles.reshouted}>
              <p className={styles.reshoutedHeader}>Reshouted:</p>
              <div className={styles.reshoutedContent}>
                <p>
                  <strong>{postDetails.reshouted.name}</strong>{" "}
                  {postDetails.reshouted.username}
                </p>
                <p>{postDetails.reshouted.content}</p>
              </div>
            </div>
          )}
        </div>

        {/* Add Comment */}
        <div className={styles.addComment}>
          <img
            src="https://via.placeholder.com/50"
            alt="User avatar"
            className={styles.avatar}
          />
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
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
          <button onClick={handleAddComment} className={styles.commentButton}>
            Comment
          </button>
        </div>

        {/* Comments Section */}
        <div className={styles.commentsSection}>
          {(comments[postId] || []).map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
