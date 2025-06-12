import React, { useEffect, useState } from 'react';
import api from '../api';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/games').then(({ data }) => setGames(data));
  }, []);

  return (
    <ul>
      {games.map(g => (
        <li key={g._id}>{g.title}</li>
      ))}
    </ul>
  );
};

export default Games;
