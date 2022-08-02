const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.DB_PASSWORD,
    database: "login_system",
    port: 3306,
})

const db_connection = db.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("yayy!!");
    }
});

exports.db = db_connection;