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

let Log = mongoose.model('Log',conversionHistorySchema)
module.exports = Log
