const path = require('path');
const express = require('express');
const queries = require('./queries');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

router.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'login.html'));
    })
    .post('/login', (req, res) => {
        console.log("someone logged in! updated");
        console.log(req.body);
        res.json({ success: true });
    })

router.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'register.html'));
    })
    .post('/register', (req, res) => {
        console.log("someone registered!");
        console.log(req.body);
        res.json({ success: true });
    })

module.exports = router;