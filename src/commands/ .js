const Discord = require('discord.js')

module.exports = {
  name: '',
  description: '',
  aliases: [''],
  categoria: '',
  execute(message, client, args) {
      return message.reply('Usa `' + process.env.prefix + 'help` para ver mi lista de comandos.')
        .then(m => m.delete({ timeout: 6000}))
  }
}