const mysql = require('mysql2');
require('dotenv').config();
const queries = require('./queries');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.DB_PASSWORD,
    database: "login_system",
    port: 3306,
})

// const db_connection = 
db.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("yayy!!");
    }
});

// db.query(queries.get_user('karen'), (err, result) => {
//     if (err) throw err;
//     console.log(result);
// })

// queries.test();

module.exports = db;