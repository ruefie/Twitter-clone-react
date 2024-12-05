import React, { useContext, useState } from "react";
import { ShoutOutContext } from "../context/ShoutOutContext";
import styles from "./ReshoutModal.module.css";

const ReshoutModal = () => {
  const {
    reshoutModalContent,
    isReshoutModalOpen,
    setIsReshoutModalOpen,
    addShoutout,
  } = useContext(ShoutOutContext);

  const [reshoutText, setReshoutText] = useState("");

  if (!isReshoutModalOpen || !reshoutModalContent) return null;

  const handleShoutOut = () => {
    const newShoutOut = {
      id: Date.now(),
      profile_image: reshoutModalContent.profileImage, 
      name: reshoutModalContent.name,
      username: reshoutModalContent.username,
      content: reshoutText.trim()
        ? `${reshoutText} // Reshout: ${reshoutModalContent.content}`
        : `Reshout: ${reshoutModalContent.content}`,
      media: reshoutModalContent.media,
      date: new Date().toISOString(),
    };

    
    addShoutout(newShoutOut);

    // Close modal and reset input
    setIsReshoutModalOpen(false);
    setReshoutText("");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setIsReshoutModalOpen(false)}
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
            <strong>{reshoutModalContent.name}</strong>{" "}
            <span>@{reshoutModalContent.username}</span>{" "}
            · {new Date(reshoutModalContent.date).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
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
