const { poolPromise, sql } = require('../config/db');

const getByBiotipo = async (biotipo) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('biotipo', sql.VarChar, biotipo)
        .query('SELECT * FROM Dietas WHERE biotipo = @biotipo');
    return result.recordset;
};

module.exports = { getByBiotipo };