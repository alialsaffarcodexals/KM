import React from 'react';

const UsersPanel = ({ users }) => (
  <div className="p-4">
    <h2 className="text-xl mb-2">Users</h2>
    <ul className="space-y-1">
      {users.map(u => (
        <li key={u._id}>{u.username} - {u.role}</li>
      ))}
    </ul>
  </div>
);

export default UsersPanel;
