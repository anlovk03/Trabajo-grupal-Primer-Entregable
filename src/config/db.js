const sql = require('mssql');
require('dotenv').config(); // Esto lee el archivo .env

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

console.log("Intentando conectar a SQL Server...");

const poolPromise = sql.connect(config)
    .then(pool => {
        console.log("Conectado a SQL Server");
        return pool;
    })
    .catch(err => {
        console.log("Error de conexión: ", err);
    });

module.exports = {
    sql,
    poolPromise
};