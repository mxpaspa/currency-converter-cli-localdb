const menus = {
  main: `

    create a user ...............'converter create-user <username> <password>''
    login .......................'converter login'
    show help....................'converter help'

    ----------- AFTER AUTHENTICATING ----------------------

    make a conversion ...........'convert <home currency> <exchange currency> <amount>'
                                 'convert USD EUR 10'
    show conversion history .....'logs' (will show the last 5 conversions)
    show help ................... 'help'

    `

}

module.exports = () => {
  // const subCmd = args._[0] === 'help'
  //   ? args._[1]
  //   : args._[0]

  // console.log(menus[subCmd] || menus.main)
  console.log(menus.main);
}
