const Game = require('../models/Game');

exports.getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};
