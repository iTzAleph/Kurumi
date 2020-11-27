const Discord = require('discord.js')

module.exports = {
  name: 'flower',
  description: '',
  aliases: ['flor'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    let persona = client.users.cache.find(e =>  e.username.startsWith(args[0])) ||client.users.resolve(args[0]) || message.mentions.users.first()
    if(!persona) return message.channel.send(`Ten una flor **${message.author.username}**!! uwu :rose:`)

    message.channel.send(`**${message.author.username}** Le a dado una flor a **${persona.username}**!! :rose:`)
  }
}