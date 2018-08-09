const minimist = require('minimist')
const error = require('./utils/error')


module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'
  let homeCurrency = args._[1]
  let exchangeCurrency = args._[2]
  let amount = args._[3]

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'convert':
      require('./cmds/convert')(homeCurrency,exchangeCurrency,amount)
      break

    case 'logs':
      require('./cmds/showLogs')()
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
