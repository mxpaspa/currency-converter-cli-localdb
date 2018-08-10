const minimist = require('minimist')
const error = require('./utils/error')
const loggedIn = require('./cmds/login')
const prompt = require('prompt')
const isUserAuthenticated = require('./cmds/login')
const User = require('./models/userModel')
const ora = require('ora')
const dbCommands = require('./cmds/db');

module.exports = () => {
  // function start() {
  //
  // }
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'


  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {

//////// please refactor this
    case 'login':
      prompt.start();
      prompt.get(['username', 'password'], function (err, result) {

      let loginUserName = result.username
      let loginPassword = result.password

        // console.log('Command-line input received:');
        // console.log('  username: ' + result.username);
        // console.log('  password: ' + result.password);

        if(loginUserName && loginPassword){
          // define the mlab database url
          dbCommands.connectDb(function(db){
            const spinner = ora().start();

            db.on('error', console.error.bind(console, 'connection error:'));
              //lOGIN QUERY
              dbCommands.findUser(User,loginUserName,loginPassword,function(user){
                 if(user) {
                     spinner.stop();
                     console.log(user);

                     prompt.start();
                     prompt.get(['homecurrency', 'exchangecurrency','amount'], function (err, result) {
                         var homeCurrency = result.homecurrency
                         var exchangeCurrency = result.exchangecurrency
                         var amount = result.amount

                         require('./cmds/convert')(homeCurrency,exchangeCurrency,amount,loginUserName)
                        //  console.log('Enter C to Continue');
                        //  prompt.get(['alphabet'],function(err,result){
                        //    console.log(result);
                        //  })
                     });

                 }
                 else {
                   console.log("AuthenticationFailed");
                 }
              })
          })

          }
      });
      break
//////// please refactor this
    case 'logs':
    let loginUserName = args._[1]
    let loginPassword = args._[2]
    // define the mlab database url
    dbCommands.connectDb(function(db){
      const spinner = ora().start()
      db.on('error', console.error.bind(console, 'connection error:'));
      dbCommands.findUser(User,loginUserName,loginPassword,function(user){

        if(user) {
            spinner.stop()
            require('./cmds/showLogs')(loginUserName)
        }
        else {
          console.log("You are not authenticated");
        }


      })
    })

    // connect to mongodb



    User.findOne({username : loginUserName}).then(function(record,isMatch){
      record.comparePassword(loginPassword,function(err,isMatch){
        if (err) throw err;
        console.log(isMatch);

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
