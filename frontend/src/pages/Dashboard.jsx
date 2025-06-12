import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from './Login';
import UserHome from './UserHome';
import Chat from './Chat';
import Voice from './Voice';
import Games from './Games';
import Sites from './Sites';
import Users from './Users';
import Profiles from './Profiles';

const Dashboard = () => (
  <AuthProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="/" element={<UserHome />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/voice" element={<Voice />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/sites" element={<Sites />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/profiles" element={<Profiles />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  </AuthProvider>
);

export default Dashboard;
