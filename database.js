const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sakila',
    password: ''
});

module.exports = pool.promise();
