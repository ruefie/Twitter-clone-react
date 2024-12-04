import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

// Layout component with SideBar
const Layout = () => (
  <div className="app-container">
    <SideBar />
    <main className="main-content">
      <Outlet /> {/* This is where child routes will render */}
    </main>
  </div>
);

export default Layout;