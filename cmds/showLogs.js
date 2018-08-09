const Logs = require('../models/conversionHistoryModel')
const logFiles = require('./convert')
const mongoose = require('mongoose');

module.exports = async() => {

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
      Logs.find({
        // amount : 8.60695
      })
      .limit(5)
      .sort('-created_at')
        .then(doc => {
          console.log(doc)
        })
        .catch(err => {
          console.error(err)
        })
  } catch (err) {
        console.error(err)
  }
}
