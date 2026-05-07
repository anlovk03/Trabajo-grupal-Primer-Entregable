const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const activityRoutes = require('./src/routes/activityRoutes');
app.use('/api/activities', activityRoutes);

// Ruta de diagnóstico
app.get('/', (req, res) => {
    res.json({ mensaje: "API de FitLive funcionando ✅" });
});

// Ruta no encontrada (404)
app.use((req, res) => {
    res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

// Manejador global de errores
const errorHandler = require('./src/middleware/errorHandler');
app.use(errorHandler);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});