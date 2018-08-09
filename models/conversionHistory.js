const mongoose = require('mongoose')
// set schema for history of conversions


const conversionHistorySchema = mongoose.Schema({
  homeCurrency : { type : String },
  exchangeCurrency : { type : String },
  convertedAmount : { type : Number },
  dateConversionRan : { type : String },
  timeConversionCollected : { type : Number },
  conversionRate : { type : String },
  created_at: { type: Date }
})

conversionHistorySchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// conversionHistorySchema.pre('save',function(next) {
//   var date = new Date(this.timeConversionCollected*1000);
//   var hours = date.getHours();
//   var minutes = "0" + date.getMinutes();
//   var seconds = "0" + date.getSeconds();
//   console.log(this.timeConversionCollected = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2));
//   // console.log(moment.unix(this.timeConversionCollected));
//
//   next();
// })

let Log = mongoose.model('Log',conversionHistorySchema)
module.exports = Log
