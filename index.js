const readline = require('readline');
const events = require('events');
class _events extends events{};
const e = new _events();
const minimist = require('minimist')
const error = require('./utils/error')
const prompt = require('prompt')
const User = require('./models/userModel')
const Logs = require('./models/conversionHistoryModel')
const ora = require('ora')
const dbCommands = require('./cmds/db')

// const terminalStyle = require('./utils/terminalStyle')

module.exports = () => {

  var cli = {};

  const args = minimist(process.argv.slice(2))

  // handle the help and version commands before the cli has been initialized
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {

    case 'convert':
      let homeCurrency = args._[1]
      let exchangeCurrency = args._[2]
      let amount = args._[3]
      // var mongoose = require('mongoose');
      // var uri = 'mongodb://localhost:27017/currency-converter-cli-localdb';
      //
      // var options = {
      //       "keepAlive" : 300000,
      //       "connectTimeoutMS" : 30000,
      //       useNewUrlParser: true
      // }
      // mongoose.connect(uri, options,function(err,db){
      //   if(db){
      dbCommands.connectDb(function(connection){
      //
            connection.on('error', console.error.bind(console, 'connection error:'));
            if(connection){
              console.log('db')
              require('./cmds/convert')(homeCurrency,exchangeCurrency,amount)
            }

        });


      //     var db = mongoose.connection;
      //     db.on('error', console.error.bind(console, 'connection error:'));
      //   }
      // });
      break

    case 'help':
      require('./cmds/help')(args)
      break

    case 'logs':
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
    connection.once('open', function () {

    connection.db.collection("logs", function(err, collection){
          collection.find({}).toArray(function(err, data){
              console.log(data); // it will print your collection data
          })
      });

    });
    break
    // case 'create-user':
    //   let un = args._[1]
    //   let pw = args._[2]
    //   const spinner = ora().start()
    //   dbCommands.connectDb(function(db){
    //
    //     db.on('error', console.error.bind(console, 'connection error:'));
    //     dbCommands.createUser(User,un,pw,function(newUser){
    //
    //       if(newUser) {
    //           spinner.stop()
    //           console.log("Successfully created user!"+ '\n' +
    //           "login by entering 'converter login'");
    //           process.exit(0)
    //       }
    //       else {
    //         console.log("failed to create user");
    //       }
    //
    //
    //     })
    //   })
    //   break


    // case 'login':
    //   prompt.start();
    //   prompt.get(['username', 'password'], function (err, result) {
    //
    //   let loginUn = result.username
    //   let loginPw = result.password
    //
    //     if(loginUn && loginPw){
    //       // define the mlab database url
    //       dbCommands.loginUserName = loginUn
    //       dbCommands.loginPassword = loginPw
    //       dbCommands.connectDb(function(db){
    //          const spinner = ora().start();
    //
    //          db.on('error', console.error.bind(console, 'connection error:'));
    //            //lOGIN QUERY
    //            dbCommands.findUser(User,loginUn,loginPw,function(user){
    //               if(user) {
    //                   spinner.stop();
    //                   console.log("Success! you are logged in");
    //
    //                   // initialize the CLI if the user authenticates
    //                  cli.init()
    //             }
    //             else {
    //                 terminalStyle.horizontalLine()
    //                 console.log("Authentication Failed");
    //                 process.exit(1)
    //               }
    //            })
    //        })
    //     }
    //   });
    //   break

      case 'version':
        require('./cmds/version')(args)
        break

      case 'help':
        require('./cmds/help')(args)
        break
  }



}
