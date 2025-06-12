const TextChannel = require('../models/TextChannel');
const VoiceChannel = require('../models/VoiceChannel');

exports.getChannels = async (req, res) => {
  const text = await TextChannel.find();
  const voice = await VoiceChannel.find();
  res.json({ text, voice });
};
