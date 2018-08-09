const ora = require('ora')
const getConversion = require('../utils/converterApi')
const Log = require('../models/conversionHistory')

module.exports = async (homeCurrency,exchangeCurrency,amount) => {
  const spinner = ora().start()

  try {
    const conversion = await getConversion(homeCurrency,exchangeCurrency,amount)
    // const weather = await getWeather(location)

    spinner.stop()

    var convertToEpoch = function(unixTime) {
      var date = new Date(unixTime*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      epochTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      return epochTime
    }

    // creat a logFile from the Log schema after a conversion is returned
    const logFile = new Log({
      homeCurrency : conversion.query.from,
      exchangeCurrency : conversion.query.to,
      convertedAmount : conversion.result,
      dateConversionRan : conversion.date,
      timeConversionCollected : conversion.info.timestamp,
      conversionRate : conversion.info.rate
    });

    let unixTime = conversion.info.timestamp
    let epoch = convertToEpoch(unixTime)

    logFile.save()

    console.log(conversion.query.from,conversion.query.to,conversion.result,conversion.info.rate,conversion.date,epoch)

  } catch (err) {
    spinner.stop()
    console.error(err)
  }
}