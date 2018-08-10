const inquirer = require('inquirer')



module.exports = {


  askEncryption: () => {
    const questions = [
      {
        name: 'message',
        type: 'message',
        message: 'Enter your message:',
        validate: function( value ){
          if(value.length){
            return true
          } else {
            return 'Please enter your message'
          }
        }
      }
    ];
    return inquirer.prompt(questions)
  }
}
