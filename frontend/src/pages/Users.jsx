import React, { useEffect, useState } from 'react';
import api from '../api';
import UsersPanel from '../components/UsersPanel';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then(({ data }) => setUsers(data));
  }, []);

  return <UsersPanel users={users} />;
};

export default Users;
