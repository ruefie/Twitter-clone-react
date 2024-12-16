import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ShoutOutList from "../../components/ShoutOutList";
import SearchBar from "../../components/SearchBar";
import Subscribe from "../../components/Subscribe";
import WhoToFollow from "../../components/WhoToFollow";
import WhatsHappening from "../../components/WhatsHappening";

const Profile = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("Posts");

  const userData = {
    name: "Ruchie Roell",
    username: username || "@ruchieroell",
    joinedDate: "November 2024",
    following: 0,
    followers: 0,
    posts: 6,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <ProfileHeader name={userData.name} postsCount={userData.posts} />
          <ProfileInfo userData={userData} />
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <ShoutOutList shoutout={[]} />
        </main>
        
        <aside className={styles.sideSection}>
          <SearchBar variant="default" />
          <Subscribe />
          <WhoToFollow />
          <WhatsHappening />
        </aside>
      </div>
    </div>
  );
};

export default Profile;