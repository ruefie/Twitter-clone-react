import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import ReshoutModal from "../modal/ReshoutModal";
import { ShoutOutContext } from "../context/ShoutOutContext";

const Layout = () => {
  const { isReshoutModalOpen } = useContext(ShoutOutContext); // Use context to get modal state

  return (
    <div className="app-container">
      {/* Render ReshoutModal when modal is open */}
      {isReshoutModalOpen && <ReshoutModal />} {/* Modal directly rendered from context */}
      <SideBar />
      <main className="main-content">
        <Outlet /> {/* This is where child routes will render */}
      </main>
    </div>
  );
};

export default Layout;