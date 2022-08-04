const path = require('path');
const express = require('express');
const queries = require('./queries');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const passport = require('passport');

// const initPassport = require('./passport');

// // initPassport(
// //     passport,
// //     username =>  users.find(user.username===username) //database searcg
// // )

const users = [];

//routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

router.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'login.html'));
    })
    .post('/login', (req, res) => {
        console.log("someone logged in! updated");
        console.log(req.body[0]['value']);
        res.json({ success: true });
    })

router.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'register.html'));
    })
    .post('/register', async(req, res) => {
        try {
            console.log("someone registered!");
            console.log(req.body[0]['value']);
            const hashedPassword = await bcrypt.hash(req.body[1]['value'], 10);
            console.log(hashedPassword);
            users.push({
                username: req.body[0]['value'],
                password: hashedPassword
            });
            res.sendStatus(200);
            res.end();
            // res.json({ success: true });
        } catch {
            res.sendStatus(400);
        }
        console.log(users);
    })

module.exports = router;