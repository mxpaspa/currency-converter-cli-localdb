// const getLogData = require('../utils/converterApi')
//
// module.exports = async (homeCurrency,exchangeCurrency,amount) => {
//   const spinner = ora().start()
//
//   try {
//     const logs = await getLogData(homeCurrency,exchangeCurrency,amount)
//     // const weather = await getWeather(location)
//
//     spinner.stop()
//     const logfile = new Log({
//       homeCurrency : logs.data.query.from,
//       exchangeCurrency : logs.data.query.to,
//       amount : logs.data.query.amount,
//       dateConversionRan : logs.data.date,
//       conversionRate : logs.data.info.timestamp
//     });
//
//   } catch (err) {
//     console.error(err)
//   }
// }
