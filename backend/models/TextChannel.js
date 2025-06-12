const mongoose = require('mongoose');

const textChannelSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('TextChannel', textChannelSchema);
