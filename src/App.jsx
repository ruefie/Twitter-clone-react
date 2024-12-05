import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Communities from './pages/Communities';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import VerifiedOrgs from './pages/VerifiedOrgs';
import Layout from './components/Layout';
import { ShoutOutProvider } from './context/ShoutOutContext';
import './App.css';



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/explore', element: <Explore /> },
      { path: '/communities', element: <Communities /> },
      { path: '/messages', element: <Messages /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/premium', element: <Premium /> },
      { path: '/profile', element: <Profile /> },
      { path: '/settings', element: <Settings /> },
      { path: '/verified-orgs', element: <VerifiedOrgs /> },
    ],
  },
]);

const App = () => {
  return (
    <ShoutOutProvider>
      <RouterProvider router={router} />
    </ShoutOutProvider>
  );
};

export default App;
