const mongoose = require('mongoose');

const memberPageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bio: String,
});

module.exports = mongoose.model('MemberPage', memberPageSchema);
