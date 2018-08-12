const Logs = require('../models/conversionHistoryModel')
const logFiles = require('./convert')
const mongoose = require('mongoose')
const User = require('../models/userModel')
const ora = require('ora')
const terminalStyle = require('../index')


module.exports = async(loginUserName) => {

  var mongoose = require('mongoose');
  var uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }

  var logStyle ={
    header:
`
---------------------------------------------------------------------
                            CONVERSION HISTORY
---------------------------------------------------------------------
`,
  footer:
`
---------------------------------------------------------------------
---------------------------------------------------------------------
`
  }
  mongoose.connect(uri, options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  try {

        User.findOne({username : loginUserName},{ logFiles: { $slice: -5 } })
        .then(function(record){

        console.log(logStyle.header);
        for(var i = 0; i < record.logFiles.length; i++){

          console.log(
            // `---------------------------------------------------------------------`+ '\n' +
            "created at: "+record.logFiles[i].created_at+ '\n' +
            "your home currency: "+record.logFiles[i].homeCurrency+ '\n' +
            "your exchange currenncy: "+record.logFiles[i].exchangeCurrency+ '\n' +
            "converted amount: "+record.logFiles[i].convertedAmount+ '\n' +
            "conversion executed on: "+record.logFiles[i].dateConversionRan+ '\n' +
            "date since conversion rate changed: "+record.logFiles[i].timeConversionCollected+ '\n' +
            "conversion rate: "+record.logFiles[i].conversionRate+ '\n'

          );

        }
        console.log(logStyle.footer);

      })
      // console.log(terminalStyle.width);

  } catch (err) {
        console.error(err)
  }
}
