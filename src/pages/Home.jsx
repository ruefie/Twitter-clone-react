import React, { useContext, useState } from "react";
import ShoutOutInput from "../components/ShoutOutInput";
import ShoutOutList from "../components/ShoutOutList";
import SearchBar from "../components/SearchBar";
import WhoToFollow from "../components/WhoToFollow";
import WhatsHappening from "../components/WhatsHappening";
import Subscribe from "../components/Subscribe";
import { ShoutOutContext} from "../context/ShoutOutContext";
import styles from "./Home.module.css";
import SideBar from "../components/SideBar";





const Home = () => {
  const { shoutouts, addShoutout} = useContext(ShoutOutContext);
  const [activeTab, setActiveTab] = useState("For You");

  // useEffect(() => {
  //   // Simulate fetching data by setting the JSON data
  //   const sortedShoutouts = [...shoutoutsData].sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   );
  //   setShoutouts(sortedShoutouts);
  // }, []);

  // const addShoutout = (shoutoutText) => {
  //   const newShoutout = {
  //     id: shoutouts.length + 1,
  //     profile_image: "https://via.placeholder.com/50", 
  //     name: "Ruchie Roell", 
  //     username: "@ruchieroell", 
  //     content: shoutoutText,
  //     media: "",
  //     date: new Date().toLocaleString("en-US", {
  //       month: "short",
  //       day: "2-digit",
  //     }),
  //   };

  //   const updatedShoutouts = [newShoutout, ...shoutouts];
  //   updatedShoutouts.sort((a, b) => new Date(b.date) - new Date(a.date));
  //   setShoutouts([newShoutout, ...shoutouts]);
  // };

  return (
    <div className={styles.homeContainer}>
      <SideBar addShoutout={addShoutout} />  
      {/* Sticky Header */}
      <div className={styles.stickyHeader}>
        <div className={styles.tabs}>
          <div className={styles.buttonTabs}>
            <button
              className={activeTab === "For You" ? styles.activeTab : ""}
              onClick={() => setActiveTab("For You")}
            >
              For You
            </button>
            <button
              className={activeTab === "Following" ? styles.activeTab : ""}
              onClick={() => setActiveTab("Following")}
            >
              Following
            </button>
          </div>
          <SearchBar variant="header" />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Main Section */}
        <div className={styles.mainSection2}>
          {activeTab === "For You" && (
            <div className={styles.mainContent}>
              <div className={styles.mainSection}>
                <ShoutOutInput addShoutout={addShoutout} />
                <ShoutOutList shoutout={shoutouts} />
              </div>
              <div className={styles.sideSection}>
                <Subscribe />
                <WhoToFollow />
                <WhatsHappening />
              </div>
            </div>
          )}
          {activeTab === "Following" && (
            <div className={styles.mainContentFollowing}>
              <div className={styles.mainSection}>
                <ShoutOutInput addShoutout={addShoutout} />
                <div className={styles.mainInfo}>
                  <h2>
                    Welcome to ShoutOut! 
                  </h2>
                  <p>Content from users you are following
                  will appear here!</p>
                  <button>Let's Go</button>
                </div>
              </div>
              <div className={styles.sideSection}>
                <Subscribe />
                <WhoToFollow />
                <WhatsHappening />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Section */}
      </div>
    </div>
  );
};

export default Home;
