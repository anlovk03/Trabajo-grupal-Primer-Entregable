const { poolPromise, sql } = require('../config/db');

// Obtener todas las actividades
const getAll = async () => {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Actividades');
    return result.recordset;
};

// Crear una actividad
const create = async (tipo, duracion, fecha) => {
    const pool = await poolPromise;
    await pool.request()
        .input('tipo', sql.VarChar, tipo)
        .input('duracion', sql.Int, duracion)
        .input('fecha', sql.Date, fecha)
        .query('INSERT INTO Actividades (tipo, duracion, fecha) VALUES (@tipo, @duracion, @fecha)');
};

// Actualizar una actividad
const update = async (id, tipo, duracion, fecha) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('id', sql.Int, id)
        .input('tipo', sql.VarChar, tipo || null)
        .input('duracion', sql.Int, duracion || null)
        .input('fecha', sql.Date, fecha || null)
        .query(`UPDATE Actividades 
                SET tipo = ISNULL(@tipo, tipo), 
                    duracion = ISNULL(@duracion, duracion), 
                    fecha = ISNULL(@fecha, fecha) 
                WHERE id = @id`);
    return result.rowsAffected[0];
};

// Eliminar una actividad
const remove = async (id) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('id', sql.Int, id)
        .query('DELETE FROM Actividades WHERE id = @id');
    return result.rowsAffected[0];
};

module.exports = { getAll, create, update, remove };