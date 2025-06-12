const express = require('express');
const router = express.Router();
const { getGames } = require('../controllers/gameController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth(), getGames);

module.exports = router;
