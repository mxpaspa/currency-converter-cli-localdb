const Logs = require('../models/conversionHistory')
const logFiles = require('./convert')
const mongoose = require('mongoose');

module.exports = async() => {

  mongoose.connect('mongodb://localhost:27017/convertercli',{
    useNewUrlParser: true})
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

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
