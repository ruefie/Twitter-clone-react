import React, { useState, useContext, useRef } from "react";
import styles from "./ShoutOutInput.module.css";
import { ShoutOutContext } from "../context/ShoutOutContext";
import EmojiPicker from "emoji-picker-react";
import { toast } from "sonner";

const ShoutOutInput = ({ isModal, closeModal }) => {
  const [shoutoutText, setShoutoutText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const { addShoutout } = useContext(ShoutOutContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Allow submission if either text or media is present
    if (shoutoutText.trim() || selectedMedia) {
      addShoutout(shoutoutText, selectedMedia);
      setShoutoutText("");
      setSelectedMedia(null);
      if (closeModal) {
        closeModal();
      }
      toast.success("Shout out posted successfully!");
    }
  };

  const handleInputChange = (e) => {
    setShoutoutText(e.target.value);
  };

  const handleEmojiClick = (emojiData) => {
    setShoutoutText(prev => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleVideoClick = () => {
    videoInputRef.current.click();
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    // Check file type
    if (type === 'image' && !file.type.startsWith('image/')) {
      toast.error("Please select an image file");
      return;
    }

    if (type === 'video' && !file.type.startsWith('video/')) {
      toast.error("Please select a video file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedMedia({
        type,
        url: reader.result
      });
      toast.success(`${type} uploaded successfully!`);
    };
    reader.readAsDataURL(file);
  };

  const removeMedia = () => {
    setSelectedMedia(null);
    // Reset file inputs
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (videoInputRef.current) videoInputRef.current.value = '';
    toast.success("Media removed");
  };

  return (
    <div className={`${styles.container} ${isModal ? styles.modalContainer : ""}`}>
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=default"
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

          {selectedMedia && (
            <div className={styles.mediaPreview}>
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.url} alt="Selected" />
              ) : (
                <video src={selectedMedia.url} controls />
              )}
              <button 
                type="button" 
                onClick={removeMedia} 
                className={styles.removeMedia}
                aria-label="Remove media"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
          )}

          <div className={styles.iconContainer}>
            <div className={styles.icons}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e, 'image')}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <input
                type="file"
                ref={videoInputRef}
                onChange={(e) => handleFileChange(e, 'video')}
                accept="video/*"
                style={{ display: 'none' }}
              />
              <i className="fa-solid fa-image" onClick={handleImageClick}></i>
              <i className="fa-solid fa-video" onClick={handleVideoClick}></i>
              <i 
                className="fa-regular fa-face-smile" 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              ></i>
              <i className="fa-solid fa-list-ul"></i>
              <i className="fa-regular fa-calendar-plus"></i>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={!shoutoutText.trim() && !selectedMedia}
            >
              Shout Out!
            </button>
          </div>

          {showEmojiPicker && (
            <div className={styles.emojiPicker}>
              <EmojiPicker 
                onEmojiClick={handleEmojiClick}
                searchPlaceHolder="Search emoji..."
                width={350}
                height={400}
                previewConfig={{
                  showPreview: false
                }}
                skinTonesDisabled
                theme="dark"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ShoutOutInput;