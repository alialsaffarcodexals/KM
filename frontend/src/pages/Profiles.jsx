import React, { useEffect, useState } from 'react';
import api from '../api';

const Profiles = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/users/me').then(({ data }) => setProfile(data));
  }, []);

  if (!profile) return null;

  return (
    <div>
      <h2>{profile.username}</h2>
      <p>Role: {profile.role}</p>
    </div>
  );
};

export default Profiles;
