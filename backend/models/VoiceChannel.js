const mongoose = require('mongoose');

const voiceChannelSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('VoiceChannel', voiceChannelSchema);
