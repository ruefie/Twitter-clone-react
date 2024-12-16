import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import ShoutOutList from "../components/ShoutOutList";
import Subscribe from "../components/Subscribe";
import WhoToFollow from "../components/WhoToFollow";
import WhatsHappening from "../components/WhatsHappening";
import SearchBar from "../components/SearchBar";
import styles from "./Profile.module.css";
const Profile = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("Posts");
  // Hardcoded user data for now
  const userData = {
    name: "Ruchie Roell",
    username: username || "@ruchieroell",
    joinedDate: "November 2024",
    following: 0,
    followers: 0,
    posts: 6,
  };
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainSection2}>
          <div className={styles.mainContent}>
            <div className={styles.mainSection}>
              {/* Profile Header */}
              <div className={styles.mainSectionHeaderContainer}>
                <div className={styles.mainSectionHeader}>
                  <ArrowLeft />
                  <div className={styles.headerInfo}>
                    <h2>{userData.name}</h2>
                    <p>{userData.posts} posts</p>
                  </div>
                </div>
              </div>
              {/* Profile Info */}
              <div className="border-b">
                <div className="h-48 bg-muted"></div>
                <div className="relative px-4 pb-4">
                  <div className="absolute -top-12">
                    <div className="h-24 w-24 rounded-full bg-green-700 border-4 border-background flex items-center justify-center text-3xl text-white">
                      R
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button className="rounded-full border px-4 py-1.5 font-semibold hover:bg-accent">
                      Edit profile
                    </button>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <p className="text-muted-foreground">{userData.username}</p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {userData.joinedDate}</span>
                    </div>
                    <div className="flex gap-4 mt-3 text-sm">
                      <span>
                        <span className="font-semibold">{userData.following}</span>{" "}
                        <span className="text-muted-foreground">Following</span>
                      </span>
                      <span>
                        <span className="font-semibold">{userData.followers}</span>{" "}
                        <span className="text-muted-foreground">Followers</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Profile Tabs */}
                <div className="flex border-b">
                  {["Posts", "Replies", "Highlights", "Media", "Likes"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 hover:bg-accent/50 relative ${
                        activeTab === tab
                          ? "font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-primary after:rounded-full"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              {/* Profile Content */}
              <ShoutOutList shoutout={[]} />
            </div>
            {/* Side Section */}
            <div className={styles.sideSection}>
            <SearchBar />
              <Subscribe />
              <WhoToFollow />
              <WhatsHappening />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;