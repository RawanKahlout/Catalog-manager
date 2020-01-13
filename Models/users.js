const mongoose = require('mongoose');
const User = new mongoose.Schema({
    Username: String ,
    email : String ,
    password: String 
  });

const userAcc = mongoose.model('userAcc', User);
exports.userAcc = userAcc;