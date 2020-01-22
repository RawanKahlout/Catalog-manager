const { userAcc } = require('../Models/users');
var http = require("http");
var jwt = require("jsonwebtoken");
var auth = require("../midleware/auth");

//const config = require("config");
require('dotenv/config');
var passwordHash = require('password-hash');
const passport = require('passport');

//json web token send after login from server to client,using local storage

module.exports = (app) => {
    let hashedPassword;
    app.post('/api/signup', async (req, res) => {
     
        const resultf = await userAcc.findOne({ "email": req.body.email });
        if (resultf) {
            return res.send("you ar already exist");
        }
        else {
            hashedPassword = passwordHash.generate(req.body.password);
            new userAcc({
                email: req.body.email,
                Username: req.body.Username,
                password: hashedPassword

            }).save()
                .then(result => {
                    res.send(result);
                });
        }
    })

    app.post('/api/login', async (req, res) => {

        const result = await userAcc.findOne({ "email": req.body.email });
        if (!result) return res.status(404).send("email");
        const isValid = passwordHash.verify(req.body.password, result.password);
        if (isValid) {
            const token = jwt.sign({ _id: userAcc._id }, process.env.JWTKEY);
            res.header('authToken', token).json(token);
        }
        else {
            return res.status(404).send("somethingWrong");
        }
    }
    )
    app.get('/api/isActive', auth, async (req, res, next) => {
        return res.status(200).res.header('authToken', token).json(token);
    })

    app.get('/api/logout',(req, res)=>{
            req.logout();
            res.send("");
        });
    }

