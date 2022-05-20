const express = require('express');
const router = express.Router();
const controller = require('../controllers/userConytroller')

/* GET users listing. */
router.get('/', controller.index);

module.exports = router;
