import React, { createContext, useState, useEffect } from "react";
import shoutoutsData from "../data/shoutoutsData.json";

export const ShoutOutContext = createContext();

export const ShoutOutProvider = ({ children }) => {
  const [shoutouts, setShoutouts] = useState([]);
  const [reshoutModalContent, setReshoutModalContent] = useState(null);
  const [isReshoutModalOpen, setIsReshoutModalOpen] = useState(false);

  useEffect(() => {
    const sortedShoutouts = [...shoutoutsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setShoutouts(sortedShoutouts);
  }, []);

  const addShoutout = (shoutoutText) => {
    if (!shoutoutText || typeof shoutoutText !== "string" || !shoutoutText.trim()) {
      console.error("Invalid shoutout text:", shoutoutText);
      return;
    }
  
    const newShoutout = {
      id: Date.now(),
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
      name: "Ruchie Roell",
      username: "@ruchieroell",
      content: shoutoutText.trim(),
      media: "",
      date: new Date().toISOString(),
    };
  
    setShoutouts((prev) => {
      const updatedShoutouts = [newShoutout, ...prev];
      return updatedShoutouts.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  };

  const addReshout = (reshoutData) => {
    console.log("Adding reshout with data:", reshoutData); 
    const newShoutout = {
      id: Date.now(),
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=reshouter",
      name: "Ruchie Roell",
      username: "@ruchieroell",
      content: reshoutData.reshoutText,
      date: new Date().toISOString(),
      reshouted: {
        id: reshoutData.id,
        profile_image: reshoutData.profile_image,
        name: reshoutData.name,
        username: reshoutData.username,
        content: reshoutData.content,
        media: reshoutData.media,
        date: reshoutData.date 
      }
    };
  
    setShoutouts((prev) => {
      const updatedShoutouts = [newShoutout, ...prev];
      return updatedShoutouts.sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    console.log("Added reshout:", newShoutout);
  };

  const openReshoutModal = (content) => {
    console.log("Opening reshout modal with content:", content);
    setReshoutModalContent(content);
    setIsReshoutModalOpen(true);
  };

  const closeReshoutModal = () => {
    setReshoutModalContent(null);
    setIsReshoutModalOpen(false);
  };

  const [comments, setComments] = useState({}); 

const addComment = (postId, commentText) => {
  if (!commentText.trim()) return;
  setComments((prev) => ({
    ...prev,
    [postId]: [...(prev[postId] || []), { id: Date.now(), text: commentText }],
  }));
};

  return (
    <ShoutOutContext.Provider
      value={{
        shoutouts,
        addShoutout,
        reshoutModalContent,
        openReshoutModal,
        closeReshoutModal,
        isReshoutModalOpen,
        addReshout,
        comments, 
    addComment
      }}
    >
      {children}
    </ShoutOutContext.Provider>
  );
};

export default ShoutOutContext;