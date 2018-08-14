// const Logs = require('../models/conversionHistoryModel')
const logs = require('./convert')
// const db = require('./db')
// const mongoose = require('mongoose')
const ora = require('ora')

module.exports = async(Logs,db) => {

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

        // var mongoose = require('mongoose');
        // var uri = 'mongodb://localhost:27017/converter-cli';
        //
        // // define a timeout (required for mlab)
        // var options = {
        //       "keepAlive" : 300000,
        //       "connectTimeoutMS" : 30000,
        //       useNewUrlParser: true
        // }
        // mongoose.connect(uri, options);
        // var db = mongoose.connection;


        console.log(logStyle.header);
        // for(var i = 0; i < Logs.length; i++){

          console.log(

            // "created at: "+history[i]+ '\n' +
            // "your home currency: "+history[i]+ '\n' +
            // "your exchange currenncy: "+history[i]+ '\n' +
            // "converted amount: "+history[i]+ '\n' +
            // "conversion executed on: "+history[i]+ '\n' +
            // "date since conversion rate changed: "+history[i]+ '\n' +
            // "conversion rate: "+history[i]+ '\n'
            
          );


        console.log(logStyle.footer);


      // console.log(terminalStyle.width);

  } catch (err) {
        console.error(err)
  }
}
