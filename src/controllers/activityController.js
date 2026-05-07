// Importamos la conexión y el objeto sql desde tu archivo de configuración
const { poolPromise, sql } = require('../config/db');

// 1. OBTENER TODAS LAS ACTIVIDADES (GET)
exports.getAllActivities = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Actividades');
        
        res.status(200).json({
            ok: true,
            data: result.recordset
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error al obtener datos de SQL Server",
            error: err.message
        });
    }
};

// 2. CREAR UNA NUEVA ACTIVIDAD (POST)
exports.createActivity = async (req, res) => {
    const { type, duration, date } = req.body;

    // Validaciones básicas
    if (!type || !duration || !date) {
        return res.status(400).json({
            ok: false,
            message: "Faltan campos obligatorios: type, duration o date."
        });
    }

    try {
        const pool = await poolPromise;
        await pool.request()
            .input('tipo', sql.VarChar, type)
            .input('duracion', sql.Int, duration)
            .input('fecha', sql.Date, date)
            .query('INSERT INTO Actividades (tipo, duracion, fecha) VALUES (@tipo, @duracion, @fecha)');

        res.status(201).json({
            ok: true,
            message: "Actividad registrada en SQL Server con éxito"
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error al guardar en la base de datos",
            error: err.message
        });
    }
};

// 3. ACTUALIZAR UNA ACTIVIDAD (PUT)
exports.updateActivity = async (req, res) => {
    const { id } = req.params;
    const { type, duration, date } = req.body;

    try {
        const pool = await poolPromise;
        
        // Ejecutamos el UPDATE. Usamos COALESCE para mantener el valor anterior si no se envía uno nuevo.
        await pool.request()
            .input('id', sql.Int, id)
            .input('tipo', sql.VarChar, type || null)
            .input('duracion', sql.Int, duration || null)
            .input('fecha', sql.Date, date || null)
            .query(`
                UPDATE Actividades 
                SET tipo = ISNULL(@tipo, tipo), 
                    duracion = ISNULL(@duracion, duracion), 
                    fecha = ISNULL(@fecha, fecha) 
                WHERE id = @id
            `);

        res.status(200).json({
            ok: true,
            message: "Actividad actualizada correctamente en SQL Server"
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error al actualizar en la base de datos",
            error: err.message
        });
    }
};

// 4. ELIMINAR UNA ACTIVIDAD (DELETE)
exports.deleteActivity = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await poolPromise;
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Actividades WHERE id = @id');

        res.status(200).json({
            ok: true,
            message: "Actividad eliminada de SQL Server con éxito"
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error al eliminar de la base de datos",
            error: err.message
        });
    }
};