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

  // Create a vertical space
  let verticalSpace = function(lines){
    lines = typeof(lines) == 'number' && lines > 0 ? lines : 1;
    for (i = 0; i < lines; i++) {
        console.log('');
    }
  };

  // Create a horizontal line across the screen
  let horizontalLine = function(){

    // Get the available screen size
    var width = process.stdout.columns;

    // Put in enough dashes to go across the screen
    var line = '';
    for (i = 0; i < width; i++) {
        line+='-';
    }
    console.log(line);

  };

  // Create centered text on the screen
  let centered = function(str){
    str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : '';

    // Get the available screen size
    var width = process.stdout.columns;

    // Calculate the left padding there should be
    var leftPadding = Math.floor((width - str.length) / 2);

    // Put in left padded spaces before the string itself
    var line = '';
    for (i = 0; i < leftPadding; i++) {
        line+=' ';
    }
    line+= str;
    console.log(line);
  };

  try {

        User.findOne({username : loginUserName},{ logFiles: { $slice: -5 } })
        .then(function(record){

        // header
        horizontalLine();
        centered('CONVERSION HISTORY');
        horizontalLine();
        verticalSpace(2);

        // console.log(record.logFiles);

        for(var i = 0; i < record.logFiles.length; i++){


          console.log(

            "created at: "+record.logFiles[i].created_at+ '\n' +
            "your home currency: "+record.logFiles[i].homeCurrency+ '\n' +
            "your exchange currenncy: "+record.logFiles[i].exchangeCurrency+ '\n' +
            "converted amount: "+record.logFiles[i].convertedAmount+ '\n' +
            "conversion executed on: "+record.logFiles[i].dateConversionRan+ '\n' +
            "date since conversion rate changed: "+record.logFiles[i].timeConversionCollected+ '\n' +
            "conversion rate: "+record.logFiles[i].conversionRate+ '\n'

          );

        }

        // footer
        verticalSpace();
        horizontalLine();

        })

  } catch (err) {
        console.error(err)
  }
}
