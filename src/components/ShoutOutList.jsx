import React, {useContext} from "react";
import ShoutOut from "./ShoutOut";
import styles from "./ShoutOutList.module.css";
import { ShoutOutContext } from "../context/ShoutOutContext";



const ShoutOutList = ({ shoutout }) => {
  const { shoutouts } = useContext(ShoutOutContext);
  return (
    <ul className={styles.shoutoutListContainer}>
      {shoutouts.map((item) => (
        <ShoutOut
          key={item.id}
          profileImage={item.profile_image}
          name={item.name}
          username={item.username}
          content={item.content}
          media={item.media}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ShoutOutList;
