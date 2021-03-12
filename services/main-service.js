// main-service.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'test',
    password: 'test123',
    database: 'testdb'
});

exports.GetJsonList = async function(req, res) {
    const connection = await pool.getConnection();
    const rows = await connection.query('SELECT * FROM USER');
    console.log(rows[0]);
    return rows[0]
}