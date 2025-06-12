const Shortcut = require('../models/Shortcut');

exports.getShortcuts = async (req, res) => {
  const shortcuts = await Shortcut.find();
  res.json(shortcuts);
};
