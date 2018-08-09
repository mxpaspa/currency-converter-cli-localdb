const axios = require('axios')
const mongoose = require('mongoose');
const Log = require('../models/conversionHistory')

module.exports = async (from,to,amount) => {

  // mongoose.connect('mongodb://paspam:witchhammer12@ds117422.mlab.com:17422/converter-cli',{
  //   useNewUrlParser: true})
  //   .then(() => {
  //     console.log("Connected to Database");
  //   })
  //   .catch((err) => {
  //       console.log("Not Connected to Database ERROR! ", err);
  //   });
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

  const results = await axios({
    method: 'get',
    url: 'https://data.fixer.io/api/convert?access_key=256eadee430def262f66216fda975c88&from='+from+'&to='+to+'&amount='+amount,
    params: {
      format: 'json',
    },
  })

  return results.data
}
