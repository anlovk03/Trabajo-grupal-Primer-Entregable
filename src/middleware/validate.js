// Valida que el body tenga los campos requeridos para crear/actualizar una actividad
const validateActivity = (req, res, next) => {
    const { type, duration, date } = req.body;

    if (!type || !duration || !date) {
        return res.status(400).json({
            ok: false,
            message: "Faltan campos obligatorios: type, duration o date."
        });
    }

    if (isNaN(duration) || duration <= 0) {
        return res.status(400).json({
            ok: false,
            message: "El campo duration debe ser un número positivo."
        });
    }

    next(); // Todo bien, continúa al controller
};

module.exports = { validateActivity };