const Logs = require('../models/conversionHistoryModel')
const logFiles = require('./convert')
const mongoose = require('mongoose')
const ora = require('ora')
const terminalStyle = require('../index')


module.exports = async() => {

  var mongoose = require('mongoose');
  var uri = 'mongodb://localhost:27017/convertercli';

  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }
  mongoose.connect(uri, options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

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


  try {

        Logs.find().limit(5)


        console.log(logStyle.header);
        for(var i = 0; i < Logs.logFiles.length; i++){

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

      
      // console.log(terminalStyle.width);

  } catch (err) {
        console.error(err)
  }
}
