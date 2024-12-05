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
    const newShoutout = {
      id: shoutouts.length + 1,
      profile_image: "https://via.placeholder.com/50",
      name: "Ruchie Roell",
      username: "@ruchieroell",
      content: shoutoutText,
      media: "",
      date: new Date().toISOString(),
    };

    setShoutouts((prev) => {
      const updatedShoutouts = [newShoutout, ...prev];
      return updatedShoutouts.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  };

  const openReshoutModal = (content) => {
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
      }}
    >
      {children}
    </ShoutOutContext.Provider>
  );
};

export default ShoutOutContext;
