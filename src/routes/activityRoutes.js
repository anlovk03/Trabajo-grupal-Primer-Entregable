const express = require('express');
const router = express.Router();

// Importamos el controlador
const activityController = require('../controllers/activityController');

// Importamos el middleware de validación
const { validateActivity } = require('../middleware/validate');

// Obtener todas las actividades (GET)
router.get('/', activityController.getAllActivities);

// Crear una nueva actividad (POST) - con validación
router.post('/', validateActivity, activityController.createActivity);

// Actualizar una actividad (PUT) - Requiere un ID y validación
router.put('/:id', validateActivity, activityController.updateActivity);

// Eliminar una actividad (DELETE) - Requiere un ID
router.delete('/:id', activityController.deleteActivity);

module.exports = router;