const Discord = require('discord.js')

module.exports = {
  name: 'coffee',
  description: 'Tomate un rico cafe con este comando',
  aliases: ['cafe', 'cofee', 'coffe', 'cofe'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    message.channel.send(`**${message.author.username}** se a tomado un rico café :coffee:`)
  }
}