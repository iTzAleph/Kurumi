const Discord = require('discord.js')

module.exports = {
  name: 'cookie',
  description: 'Puedo darte una galleta o tu darle una a alguien mas',
  aliases: ['galleta'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    let persona = client.users.cache.find(e =>  e.username.startsWith(args[0])) || client.users.resolve(args[0]) || message.mentions.users.first()
    if(!persona) return message.channel.send(`Ten una galletita **${message.author.username}**!! uwu :cookie:`)

    message.channel.send(`**${message.author.username}** Le a dado una galletita a **${persona.username}**!! :cookie:`)
  }
}