//server setup
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
require('dotenv').config();
const db_conn = require('./db');
const routes = require('./routes')

const PORT = process.env.PORT || 3000;

const app = express();

//static files and html
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);


//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Listening on port 3000");
    db_conn.db_connection;
})