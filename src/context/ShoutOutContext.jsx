import React, { createContext, useState, useEffect } from "react";
import shoutoutsData from "../data/shoutoutsData.json";

export const ShoutOutContext = createContext();

export const ShoutOutProvider = ({ children }) => {

  const [shoutouts, setShoutouts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    try {
      // Simulate fetching data and sorting it by date
      const sortedShoutouts = [...shoutoutsData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setShoutouts(sortedShoutouts); // Populate the state with data
    } catch (error) {
      console.error("Error initializing shoutouts:", error);
    }
  }, []);

  

  const addShoutout = (shoutoutText) => {
    const newShoutout = {
      id: shoutouts.length + 1,
      profile_image: "https://via.placeholder.com/50", // Placeholder profile image
      name: "Ruchie Roell",
      username: "@ruchieroell",
      content: shoutoutText,
      media: "", // No media initially
      date: new Date().toISOString(), // Use ISO format for consistent sorting
    };

    setShoutouts((prev) => [newShoutout, ...prev]);
  };

  const reshout = (shoutout) => {
    const reshoutedShoutout = {
      ...shoutout,
      id: shoutouts.length + 1,
      content: `Reshouted: ${shoutout.content}`,
      date: new Date().toISOString(), // ISO format
    };

    setShoutouts((prev) => [reshoutedShoutout, ...prev]);
  };

  if (!shoutouts) {
    console.warn("ShoutOuts are not initialized yet.");
  }

  return (
    <ShoutOutContext.Provider value={{ shoutouts, addShoutout, reshout }}>
      {children}
    </ShoutOutContext.Provider>
  );
};

export default ShoutOutContext;
