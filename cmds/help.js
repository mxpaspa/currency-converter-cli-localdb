const menus = {
  main: `
    converter [command] <options>
    refactored
    create a user .............. converter create-user <username> <password>
    login ...................... converter login
    logs ................... converter logs <username> <password>
    help ....................... show help menu for a command`,

}

module.exports = () => {
  // const subCmd = args._[0] === 'help'
  //   ? args._[1]
  //   : args._[0]

  // console.log(menus[subCmd] || menus.main)
  console.log(menus.main);
}
