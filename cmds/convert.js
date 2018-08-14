const ora = require('ora')
const getConversion = require('../utils/converterApi')
const Log = require('../models/conversionHistoryModel')

module.exports = async (homeCurrency,exchangeCurrency,amount) => {
const spinner = ora().start()

  try {

    const conversion = await getConversion(homeCurrency,exchangeCurrency,amount)

    spinner.stop()

    const logFile = new Log({
      homeCurrency : conversion.query.from,
      exchangeCurrency : conversion.query.to,
      convertedAmount : conversion.result,
      dateConversionRan : conversion.date,
      timeConversionCollected : conversion.info.timestamp,
      conversionRate : conversion.info.rate
    });

    var convertToEpoch = function(unixTime) {
      var date = new Date(unixTime*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      epochTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      return epochTime
    }

    let unixTime = conversion.info.timestamp
    let epoch = convertToEpoch(unixTime)

    logFile.save(function(err){
      if(err){
        console.log(err);
      }
    })


    console.log(
      '\n' +
      "your home currency: "+conversion.query.from+ '\n' +
      "your exchange currenncy: "+conversion.query.to+ '\n' +
      "converted amount: "+conversion.result+ '\n' +
      "conversion rate: "+conversion.info.rate+ '\n' +
      "date since conversion rate changed: "+conversion.date,epoch+ '\n'
    )
  return conversion

  } catch (err) {
    spinner.stop()
    console.error(err)
  }
}
