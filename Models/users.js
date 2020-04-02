const mongoose = require('mongoose');
const User = new mongoose.Schema({
    Username: String ,
    email : String ,
    password: String,
    Loggedin :{
      type: Boolean,
      default:false
    }
  });

const userAcc = mongoose.model('userAcc', User);
exports.userAcc = userAcc;