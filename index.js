const minimist = require('minimist')
const error = require('./utils/error')
const loggedIn = require('./cmds/login')
const prompt = require('prompt')
const isUserAuthenticated = require('./cmds/login')
const User = require('./models/userModel')


module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'


  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    // case 'convert':
    //   let homeCurrency = args._[1]
    //   let exchangeCurrency = args._[2]
    //   let amount = args._[3]
    //     require('./cmds/convert')(homeCurrency,exchangeCurrency,amount)
    //     break

    case 'login':
      prompt.start();
      prompt.get(['username', 'password'], function (err, result) {

        var loginUserName = result.username
        var loginPassword = result.password

        console.log('Command-line input received:');
        // console.log('  username: ' + result.username);
        // console.log('  password: ' + result.password);

        if(loginUserName && loginPassword){
          // define the mlab database url
          var mongoose = require('mongoose');
          var uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

          // define a timeout (required for mlab)
          var options = {
                "keepAlive" : 300000,
                "connectTimeoutMS" : 30000,
                useNewUrlParser: true
          }

          // connect to mongodb
          mongoose.connect(uri, options);
          var db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));

          User.findOne({username : loginUserName}).then(function(record,isMatch){
            record.comparePassword(loginPassword,function(err,isMatch){
              if (err) throw err;
              console.log(isMatch);

              prompt.start();
              prompt.get(['homecurrency', 'exchangecurrency','amount'], function (err, result) {
                  var homeCurrency = result.homecurrency
                  var exchangeCurrency = result.exchangecurrency
                  var amount = result.amount
                  require('./cmds/convert')(homeCurrency,exchangeCurrency,amount,loginUserName)
              });
            })
          });
        }
      });
      break

    case 'logs':
    let loginUserName = args._[1]
    let loginPassword = args._[2]
    // define the mlab database url
    var mongoose = require('mongoose');
    var uri = 'mongodb://paspam:convertercli12@ds117422.mlab.com:17422/converter-cli';

    // define a timeout (required for mlab)
    var options = {
          "keepAlive" : 300000,
          "connectTimeoutMS" : 30000,
          useNewUrlParser: true
    }

    // connect to mongodb
    mongoose.connect(uri, options);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    User.findOne({username : loginUserName}).then(function(record,isMatch){
      record.comparePassword(loginPassword,function(err,isMatch){
        if (err) throw err;
        console.log(isMatch);
        require('./cmds/showLogs')(loginUserName)

      })
    });
    break


    case 'create-user':
      let un = args._[1]
      let pw = args._[2]
      require('./cmds/createUser')(un,pw)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break

    default:
      error(`"${cmd}" is not a valid command!`, true)
      break
  }
}
