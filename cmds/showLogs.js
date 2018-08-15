module.exports = async(data,cb) => {

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

        console.log(logStyle.header);
        for(var i = 0; i < data.length; i++){

          console.log(

            "created at: "+data[i].created_at+ '\n' +
            "your home currency: "+data[i].homeCurrency+ '\n' +
            "your exchange currenncy: "+data[i].exchangeCurrency+ '\n' +
            "converted amount: "+data[i].convertedAmount+ '\n' +
            "conversion executed on: "+data[i].dateConversionRan+ '\n' +
            "date since conversion rate changed: "+data[i].timeConversionCollected+ '\n' +
            "conversion rate: "+data[i].conversionRate+ '\n'

          );

      }
      console.log(logStyle.footer);
      cb(true)
      // process.exit(1)

  } catch (err) {
        console.error(err)
  }
}
