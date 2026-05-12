const express = require('express');
const router = express.Router();
const ejercicioController = require('../controllers/ejercicioController');

router.get('/', ejercicioController.getAllEjercicios);

module.exports = router;