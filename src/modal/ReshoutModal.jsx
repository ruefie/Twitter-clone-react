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

  const handleShoutOut = () => {
    const reshoutedData = {
      id: reshoutModalContent.id,
      profile_image: reshoutModalContent.profile_image || "https://via.placeholder.com/50",
      name: reshoutModalContent.name || "Anonymous",
      username: reshoutModalContent.username || "@anonymous",
      content: reshoutModalContent.content,
      media: reshoutModalContent.media,
      reshoutText: reshoutText.trim(),
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
          {reshoutModalContent.media && (
            <img
              src={reshoutModalContent.media}
              alt="Original media"
              className={styles.mediaPreview}
            />
          )}
        </div>
        <button onClick={handleShoutOut} className={styles.reshoutButton}>
          Shout Out!
        </button>
      </div>
    </div>
  );
};

export default ReshoutModal;
