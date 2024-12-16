import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Communities from './pages/Communities/Communities';
import Messages from './pages/Messages/Messages';
import Notifications from './pages/Notifications/Notifications';
import Premium from './pages/Premium/Premium';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import VerifiedOrgs from './pages/VerifiedOrgs/VerifiedOrgs';
import Layout from './components/Layout';
import { ShoutOutProvider } from './context/ShoutOutContext';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  // Routes with sidebar
  {
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/explore', element: <Explore /> },
      { path: '/communities', element: <Communities /> },
      { path: '/messages', element: <Messages /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/profile', element: <Profile /> },
      { path: '/:username', element: <Profile /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  // Routes without sidebar
  { path: '/premium', element: <Premium /> },
  { path: '/verified-orgs', element: <VerifiedOrgs /> },
]);

const App = () => {
  return (
    <ShoutOutProvider>
      <RouterProvider router={router} />
    </ShoutOutProvider>
  );
};

export default App;