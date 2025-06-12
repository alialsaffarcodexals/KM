import React, { useEffect, useState } from 'react';
import api from '../api';

const Sites = () => {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    api.get('/shortcuts').then(({ data }) => setShortcuts(data));
  }, []);

  return (
    <ul>
      {shortcuts.map(s => (
        <li key={s._id}><a href={s.url}>{s.name}</a></li>
      ))}
    </ul>
  );
};

export default Sites;
