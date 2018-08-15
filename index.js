const minimist = require('minimist')
const error = require('./utils/error')
const User = require('./models/userModel')
const Logs = require('./models/conversionHistoryModel')
const ora = require('ora')
const dbCommands = require('./cmds/db')

module.exports = () => {

  var cli = {};

  const args = minimist(process.argv.slice(2))

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

          connection.on('error', console.error.bind(console, 'connection error:'));

            require('./cmds/convert')(homeCurrency,exchangeCurrency,amount)
            .then(function(result){
                  if (result){
                    console.log('conversion completed');
                    // process.exit(1)

                  }
              })
              .catch(function (error){
                  console.log(error);
              });

            });
      break

    case 'help':
      require('./cmds/help')(args)
      break

    case 'logs':
      dbCommands.connectDb(function(connection){
        connection.once('open', function () {

        connection.db.collection("logs", function(err, collection){
              collection.find({}).sort({created_at: -1}).limit(5).toArray(function(err, data){
                  require('./cmds/showLogs')(data,function(status){
                    if(true){
                      process.exit(1);
                    }
                  })
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
