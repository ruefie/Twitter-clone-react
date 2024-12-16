import React from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ variant = "default" }) => (
  <div className={`${styles.searchBar} ${styles[variant]}`}>
    <Search className={styles.searchIcon} />
    <input type="text" placeholder="Search ShoutOut!" />
  </div>
);

export default SearchBar;