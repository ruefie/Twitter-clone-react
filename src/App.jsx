import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Communities from "./pages/Communities";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import VerifiedOrgs from "./pages/VerifiedOrgs";
import SideBar from "./components/SideBar";
import "./App.css";

// const Navbar = () => (
//   <nav className="navbar">
//     <h1 className="logo">Twitter Clone</h1>
//     <ul className="nav-links">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/explore">Explore</Link></li>
//       <li><Link to="/communities">Communities</Link></li>
//       <li><Link to="/messages">Messages</Link></li>
//       <li><Link to="/notifications">Notifications</Link></li>
//       <li><Link to="/premium">Premium</Link></li>
//       <li><Link to="/profile">Profile</Link></li>
//       <li><Link to="/settings">Settings</Link></li>
//       <li><Link to="/verified-orgs">Verified Orgs</Link></li>
//     </ul>
//   </nav>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SideBar />
        <Home />
      </>
    ),
  },
  {
    path: "/explore",
    element: (
      <>
          <SideBar />
        <Explore />
      </>
    ),
  },
  {
    path: "/communities",
    element: (
      <>
          <SideBar />
        <Communities />
      </>
    ),
  },
  {
    path: "/messages",
    element: (
      <>
         <SideBar />
        <Messages />
      </>
    ),
  },
  {
    path: "/notifications",
    element: (
      <>
         <SideBar />
        <Notifications />
      </>
    ),
  },
  {
    path: "/premium",
    element: (
      <>
         <SideBar />
        <Premium />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
         <SideBar />
        <Profile />
      </>
    ),
  },
  {
    path: "/settings",
    element: (
      <>
         <SideBar />
        <Settings />
      </>
    ),
  },
  {
    path: "/verified-orgs",
    element: (
      <>
         <SideBar />
        <VerifiedOrgs />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

