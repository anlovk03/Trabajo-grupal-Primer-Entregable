const { getByBiotipo } = require('../models/dietaModel');

exports.getDietaByBiotipo = async (req, res) => {
    try {
        const { biotipo } = req.params;
        const data = await getByBiotipo(biotipo);
        res.status(200).json({ ok: true, data });
    } catch (err) {
        res.status(500).json({ ok: false, message: err.message });
    }
};