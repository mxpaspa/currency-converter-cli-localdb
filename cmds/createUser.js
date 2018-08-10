const mongoose = require('mongoose')
const User = require('../models/userModel')

const uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

module.exports = async(un,pw) => {
  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }

  // connect to the database
  mongoose.connect(uri, options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));


  // create a user a new user
  var testUser = new User({
      username: un,
      password: pw,
  });

  testUser.save();

}
