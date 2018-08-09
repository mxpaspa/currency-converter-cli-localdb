const axios = require('axios')
const mongoose = require('mongoose');
const Log = require('../models/conversionHistory')

module.exports = async (from,to,amount) => {

  mongoose.connect('mongodb://localhost:27017/convertercli',{
    useNewUrlParser: true})
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

  const results = await axios({
    method: 'get',
    url: 'https://data.fixer.io/api/convert?access_key=256eadee430def262f66216fda975c88&from='+from+'&to='+to+'&amount='+amount,
    params: {
      format: 'json',
    },
  })

  return results.data
}
