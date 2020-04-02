const { userAcc } = require('../Models/users');
var http = require("http");
var jwt = require("jsonwebtoken");
var auth = require("../midleware/auth");
require('dotenv/config');
var passwordHash = require('password-hash');
const passport = require('passport');
//json web token send after login from server to client,using local storage
module.exports = (app) => {
    let hashedPassword;
    let userId;
    //signup
    app.post('/api/signup', async (req, res) => {
        const resultf = await userAcc.findOne({ "email": req.body.email });
        if (resultf) {
            console.log(resultf);
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
    //login
    app.post('/api/login',async (req, res) => {
        const result = await userAcc.findOne({ "email": req.body.email });
        if (!result) return res.status(404).send("email");
        const isValid = passwordHash.verify(req.body.password, result.password);
        userId = result._id;
        if (isValid) {
            const token = jwt.sign({ _id:userId}, process.env.JWTKEY);
            logged(userId,1)
            return res.json(token).status(200);
        }
        else {
            return res.status(404).send("somethingWrong");}
    })
    //isActive
    app.get('/api/isActive', auth, async (req, res, next) => {
        return res.status(200).json(token);
    })
    //logout
    app.get('/api/logout', (req, res) => {   
        logged(userId,0)
        req.logout();
        res.status(200).send("loggedOut");});

    //toSetLoggedValue
    async function logged(userId, processFlag) {
            if (processFlag == 1) {
                const info = await userAcc.updateOne({ '_id': userId },
                { $set: { Loggedin: true } })
                    if (info) {
                        return;}
                    else {
                    console.log("SomeThimgWrong");}
                }
            else {
                const info = await userAcc.updateOne({ '_id': userId },
                { $set: { Loggedin: false } })
                    if (info) { 
                    return;}
                    else {console.log("SomeThimgWrong");}
                }
    
        }
}

