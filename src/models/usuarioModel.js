const { poolPromise, sql } = require('../config/db');

const registrar = async (nombre, apellidos, telefono, correo, contrasena) => {
    const pool = await poolPromise;
    await pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('apellidos', sql.VarChar, apellidos)
        .input('telefono', sql.VarChar, telefono)
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasena)
        .query('INSERT INTO Usuarios (nombre, apellidos, telefono, correo, contrasena) VALUES (@nombre, @apellidos, @telefono, @correo, @contrasena)');
};

const login = async (correo, contrasena) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasena)
        .query('SELECT * FROM Usuarios WHERE correo = @correo AND contrasena = @contrasena');
    return result.recordset[0];
};

module.exports = { registrar, login };