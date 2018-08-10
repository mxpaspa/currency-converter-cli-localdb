const Logs = require('../models/conversionHistoryModel')
const logFiles = require('./convert')
const mongoose = require('mongoose')
const User = require('../models/userModel')
const ora = require('ora')

module.exports = async(loginUserName) => {

  var mongoose = require('mongoose');
  var uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }

  mongoose.connect(uri, options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  try {

        User.findOne({username : loginUserName}).then(function(record){

          console.log(record.logFiles);
        });

  } catch (err) {
        console.error(err)
  }
}
