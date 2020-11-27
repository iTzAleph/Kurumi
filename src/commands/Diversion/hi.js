const Discord = require('discord.js')

module.exports = {
  name: 'hi',
  description: 'Si quieres que alguien te salude solo usa este comando.',
  aliases: ['hello', 'hola', 'ola'],
  categoria: 'Diversion',
  execute(message, client, args) {
    return message.channel.send('> :wave: Hola **' + message.author.username + '**!, ¿Como estas?')
  }
}