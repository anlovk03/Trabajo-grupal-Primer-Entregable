const express = require('express');
const router = express.Router();
const dietaController = require('../controllers/dietaController');

router.get('/:biotipo', dietaController.getDietaByBiotipo);

module.exports = router;