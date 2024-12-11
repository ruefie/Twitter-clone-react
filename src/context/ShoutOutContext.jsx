import React, { createContext, useState, useEffect } from "react";
import shoutoutsData from "../data/shoutoutsData.json";

export const ShoutOutContext = createContext();

export const ShoutOutProvider = ({ children }) => {
  const [shoutouts, setShoutouts] = useState([]);
  const [reshoutModalContent, setReshoutModalContent] = useState(null);
  const [isReshoutModalOpen, setIsReshoutModalOpen] = useState(false);
  const [comments, setComments] = useState({});
  

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
      likes: 0,
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


  const addComment = (postId, commentText) => {
    if (!commentText || typeof commentText !== "string" || !commentText.trim()) {
      console.error("Invalid comment text:", commentText);
      return;
    }

    if (typeof postId !== 'number' || isNaN(postId)) {
      console.error("Invalid postId:", postId);
      return;
    }

    setComments((prevComments) => {
      const postComments = prevComments[postId] || [];
      const newComment = {
        id: Date.now(),
        text: commentText.trim(),
        date: new Date().toISOString(),
      };

      console.log(`Adding comment to post ${postId}:`, newComment);

      return {
        ...prevComments,
        [postId]: [...postComments, newComment],
      };
    });
  };

  const getCommentCount = (postId) => {
    if (typeof postId !== 'number' || isNaN(postId)) {
      console.error("Invalid postId in getCommentCount:", postId);
      return 0;
    }
    return comments[postId]?.length || 0;
  };

  const addLike = (postId) => {
    setShoutouts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, likes: (post.likes || 0) + 1 } // Increment likes
          : post
      )
    );
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
        addComment,
        getCommentCount
      }}
    >
      {children}
    </ShoutOutContext.Provider>
  );
};

export default ShoutOutContext;