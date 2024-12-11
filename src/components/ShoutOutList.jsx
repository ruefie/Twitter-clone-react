import React from "react";
import ShoutOut from "./ShoutOut";
import styles from "./ShoutOutList.module.css";
const ShoutOutList = ({ shoutout }) => {
  if (!Array.isArray(shoutout)) {
    return <div>Error: ShoutOut list is not valid</div>;
  }
  return (
    <ul className={styles.shoutoutListContainer}>
      {shoutout.map((item) => (
        <ShoutOut
          key={item.id}
          id={item.id} 
          profile_image={item.profile_image} 
          name={item.name}
          username={item.username}
          content={item.content}
          media={item.media}
          date={item.date}
          reshouted={item.reshouted} 
        />
      ))}
    </ul>
  );
};
export default ShoutOutList;