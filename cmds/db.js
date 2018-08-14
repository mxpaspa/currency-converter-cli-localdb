var options = {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000,
      useNewUrlParser: true
}

function connectDb(cb) {
  var mongoose = require('mongoose');
  var uri = 'mongodb://localhost:27017/converter-cli';

  // define a timeout (required for mlab)
  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }
  mongoose.connect(uri, options);
  var connection = mongoose.connection;
  cb(connection);
}

module.exports  =  {
  connectDb
}
