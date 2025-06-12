const express = require('express');
const router = express.Router();
const { getShortcuts } = require('../controllers/shortcutController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth(), getShortcuts);

module.exports = router;
