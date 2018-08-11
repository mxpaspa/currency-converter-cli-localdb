

function findUser(User,loginUserName,loginPassword, cb) {
    User.findOne({username : loginUserName}).then(function(record,isMatch){
      record.comparePassword(loginPassword,function(err,isMatch){
        if (err) throw err;
        cb(isMatch);
    });
  });
}


function connectDb(cb) {
  var mongoose = require('mongoose');
  var uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

  // define a timeout (required for mlab)
  var options = {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000,
        useNewUrlParser: true
  }
  mongoose.connect(uri, options);
  var db = mongoose.connection;
  cb(db);
}

function createUser(User,un,pw,cb){
  // create a user a new user
  var newUser = new User({
      username: un,
      password: pw,
  });

  newUser.save();
  cb(newUser)
}

module.exports  =  {
  findUser,
  connectDb,
  createUser
}
