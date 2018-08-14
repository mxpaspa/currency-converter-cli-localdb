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

      dbCommands.connectDb(function(connection){
      //
            connection.on('error', console.error.bind(console, 'connection error:'));
            if(connection){
              console.log('db')
              require('./cmds/convert')(homeCurrency,exchangeCurrency,amount)
            }

        });
      break

    case 'help':
      require('./cmds/help')(args)
      break

    case 'logs':
      dbCommands.connectDb(function(connection){
        connection.once('open', function () {

        connection.db.collection("logs", function(err, collection){
              collection.find({}).toArray(function(err, data){
                  console.log(data); // it will print your collection data
              })
          });

        });
      });
    break
    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break
  }

}
