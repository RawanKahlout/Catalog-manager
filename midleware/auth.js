const jwt = require('jsonwebtoken');
const config = require('config');
const { userAcc }= require('../Models/users');
require('dotenv/config');
module.exports = function (req , res , next){
var token = req.header('authToken');
token=req.query.token;
//token =authToken;
if (!token)
    return res.status(401).send('Access denied ,No token provided');
  else{  try{
        
        const decoded = jwt.verify(token,process.env.JWTKEY);
          req.user = decoded
        next();
    }
    catch(ex) {
        res.status(400).send('invalid').end();}//wrong data
    }
}
