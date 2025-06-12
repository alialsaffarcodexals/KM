const express = require('express');
const router = express.Router();
const { getChannels } = require('../controllers/channelController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth(), getChannels);

module.exports = router;
