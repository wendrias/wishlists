//server setup
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mysql = require('mysql2')
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

//static files and html
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());

//env variables
console.log(process.env.DB_PASSWORD)

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.DB_PASSWORD,
    database: "login_system",
    port: 3306,
})



//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
})

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    console.log("someone logged in!");
    console.log(req.body);
    res.json({ success: true });
})

app.listen(PORT, function() {
    console.log("Listening on port 3000");

    db.connect(function(err) {
        if (err) {
            throw err;
        } else {
            console.log("yayy!!");
        }
    })
})