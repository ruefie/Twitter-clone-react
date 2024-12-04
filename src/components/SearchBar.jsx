import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => (
  <div className={styles.searchBar}>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Search ShoutOut!" />
  </div>
);

export default SearchBar;
