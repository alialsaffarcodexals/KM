const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Game', gameSchema);
