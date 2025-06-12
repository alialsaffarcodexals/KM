import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-48 bg-gray-200 p-4 space-y-2">
    <nav className="flex flex-col space-y-2">
      <Link to="/home" className="hover:underline">Home</Link>
      <Link to="/chat" className="hover:underline">Chat</Link>
      <Link to="/voice" className="hover:underline">Voice</Link>
      <Link to="/games" className="hover:underline">Games</Link>
      <Link to="/sites" className="hover:underline">Sites</Link>
      <Link to="/users" className="hover:underline">Users</Link>
      <Link to="/profiles" className="hover:underline">Profiles</Link>
    </nav>
  </aside>
);

export default Sidebar;
