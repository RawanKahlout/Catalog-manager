const { userAcc } = require('../Models/users');
var http = require("http");
var jwt = require("jsonwebtoken");
var auth = require("../midleware/auth");
//const config = require("config");
require('dotenv/config');
//json web token send after login from server to client,using local storage

module.exports = (app) => {

    app.post('/api/signup', async (req, res) => {
        const resultf = await userAcc.findOne({ "email": req.body.email });
        if (resultf) {
            return res.send("you ar already exist");
        }
        else {
            new userAcc({
                email: req.body.email,
                Username: req.body.Username,
                password: req.body.password

            }).save()
                .then(result => {
                    res.send(result);
                });
        }
    })

    app.post('/api/login', async (req, res) => {
        const result = await userAcc.findOne({ "email": req.body.email, "password": req.body.password });
        if (!result) {
            return res.status(404).send("its not found");
        }
        else {
            
            const token = jwt.sign({ _id: userAcc._id }, process.env.JWTKEY, { expiresIn: '3h' });
            res.header('authToken', token).json(token);
        }

    })
    app.get('/api/isActive', auth, async (req,res,next) => {
    return res.status(200).res.header('authToken', token).json(token);
    })
    

}