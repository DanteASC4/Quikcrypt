#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer  = require('./lib/inquire');
const clipboardy = require('clipboardy');
const log = console.log;



//Clearing console when run
clear();

//Banner / title
console.log(
  chalk.yellowBright(
    figlet.textSync('Quikcrypt',{horizontalLayout: 'full', verticalLayout: 'full'    })
  )
)




//Run encryption function
const run = async () => {
  const credentials = await inquirer.askEncryption();
  const msg = credentials['message']



  //Start of [en/de]cryption

  //Turn input into an array.
  //Output is array of single characters if not a hash
  //Output is array of every six characters if hash
  const arrMaker = input => {
    return typeof input == 'string' ? (input[1] == '0' ? input.match(/.{6}/g) : input.split('')) : (input ? new Error('invalid input') : new Error('invalid input'))
  }


  //Random character set
  const randomletterSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªµºÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĂăĄąĆćĘęıŁłŃńŐőŒœŚśŞşŠšŢţŰűŸŹźŻżŽžƒȘșȚțˆˇˉΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩάέήίαβγδεζηθικλμνξοπρςστυφχψωόύώﬁﬂ'

  //Chooses random character to hash message
  const randomCharacter = () => randomletterSet[Math.floor(Math.random() * 228)]

  //Converts normal string to hash
  const stringToHexa = strArr =>strArr.map(x => (randomCharacter() + "0x" + x.charCodeAt(0).toString(16)) + randomCharacter()).join('')

  //Converts simple hash characters to normal characters, returns plaintext
  const hexaToString = hexaArr =>{
    let cleanArr = hexaArr.map(e => e.replace(/^.|.$/g, ''))
    return cleanArr.map(e => String.fromCharCode(parseInt(e))).join('')
  }

  //Checks if input is hash or plaintext
  //Converts to hash if plaintext
  //Converts to plaintext if hash

  const encryptorDecrypt = ಠ_ಠ => {
    let given = arrMaker(ಠ_ಠ);
    if(given[0][1] != '0'){
      return stringToHexa(given)
    } else {
      return hexaToString(given)
    }
  }


  //End of [en/de]cryption


  const secretMsg = encryptorDecrypt(msg)
  clipboardy.writeSync(secretMsg)
  log(chalk.redBright('Secret message copied to clipboard'))
  return
}
run();
