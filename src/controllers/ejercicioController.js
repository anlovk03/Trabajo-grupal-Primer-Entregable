const { getAll } = require('../models/ejercicioModel');

exports.getAllEjercicios = async (req, res) => {
    try {
        const data = await getAll();
        res.status(200).json({ ok: true, data });
    } catch (err) {
        res.status(500).json({ ok: false, message: err.message });
    }
};