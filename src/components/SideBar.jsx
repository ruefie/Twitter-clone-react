import React from "react";
import { Link } from "react-router-dom";
import "../SideBar.css";
const SideBar = () => (
  <nav className="navbar">
    <h1 className="logo">Twitter</h1>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/explore">Explore</Link></li>
      <li><Link to="/communities">Communities</Link></li>
      <li><Link to="/messages">Messages</Link></li>
      <li><Link to="/notifications">Notifications</Link></li>
      <li><Link to="/premium">Premium</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/verified-orgs">Verified Orgs</Link></li>
    </ul>
  </nav>
);

export default SideBar;
