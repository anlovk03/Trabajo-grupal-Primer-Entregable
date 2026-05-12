const { poolPromise, sql } = require('../config/db');

const getAll = async () => {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Ejercicios');
    return result.recordset;
};

const create = async (nombre, musculo, series) => {
    const pool = await poolPromise;
    await pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('musculo', sql.VarChar, musculo)
        .input('series', sql.VarChar, series)
        .query('INSERT INTO Ejercicios (nombre, musculo, series) VALUES (@nombre, @musculo, @series)');
};

module.exports = { getAll, create };