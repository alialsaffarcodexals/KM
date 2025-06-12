const mongoose = require('mongoose');

const shortcutSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model('Shortcut', shortcutSchema);
