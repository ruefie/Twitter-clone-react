import React, { useContext, useState } from "react";
import { ShoutOutContext } from "../context/ShoutOutContext";
import styles from "./ReshoutModal.module.css";

const ReshoutModal = () => {
  const {
    reshoutModalContent,
    isReshoutModalOpen,
    closeReshoutModal,
    addReshout,
  } = useContext(ShoutOutContext);

  const [reshoutText, setReshoutText] = useState("");

  if (!isReshoutModalOpen || !reshoutModalContent) return null;

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
            className={styles.media}
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
        return <img src={media.url} alt="Post media" className={styles.media} />;
      default:
        return null;
    }
  };

  const handleShoutOut = () => {
    const reshoutedData = {
      id: reshoutModalContent.id,
      profile_image: reshoutModalContent.profile_image || "https://via.placeholder.com/50",
      name: reshoutModalContent.name || "Anonymous",
      username: reshoutModalContent.username || "@anonymous",
      content: reshoutModalContent.content,
      media: reshoutModalContent.media,
      reshoutText: reshoutText.trim(),
      date: reshoutModalContent.date
    };
  
    addReshout(reshoutedData); 
    closeReshoutModal(); 
    setReshoutText(""); 
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => closeReshoutModal()}
        >
          &times;
        </button>
        <input
        className={styles.input}
          value={reshoutText}
          onChange={(e) => setReshoutText(e.target.value)}
          placeholder="Add your thoughts..."
          rows="3"
        />
        <div className={styles.originalShoutOut}>
          <p>
            <strong>{reshoutModalContent.name}</strong>
            <span>{reshoutModalContent.username}</span>
            <span>
              {" "}
              ·{" "}
              {reshoutModalContent.date
    ? new Date(reshoutModalContent.date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })
    : "Invalid date"}
            </span>
          </p>
          <p>{reshoutModalContent.content}</p>
          <div className={styles.reshoutContentMedia}> {reshoutModalContent.media && renderMedia(reshoutModalContent.media)}</div>
         
        </div>
        <button onClick={handleShoutOut} className={styles.reshoutButton}>
          Shout Out!
        </button>
      </div>
    </div>
  );
};

export default ReshoutModal;
