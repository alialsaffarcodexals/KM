import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserHome from './UserHome';
import Chat from './Chat';
import Voice from './Voice';
import Games from './Games';
import Sites from './Sites';
import Users from './Users';
import Profiles from './Profiles';

const Dashboard = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4">
        <Routes>
          <Route index element={<UserHome />} />
          <Route path="chat" element={<Chat />} />
          <Route path="voice" element={<Voice />} />
          <Route path="games" element={<Games />} />
          <Route path="sites" element={<Sites />} />
          <Route path="users" element={<Users />} />
          <Route path="profiles" element={<Profiles />} />
        </Routes>
      </main>
    </div>
  </div>
);

export default Dashboard;
