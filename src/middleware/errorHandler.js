// Manejador global de errores - va al final de todas las rutas en server.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        ok: false,
        message: "Error interno del servidor",
        error: err.message
    });
};

module.exports = errorHandler;