const Discord = require('discord.js')

module.exports = {
  name: 'me',
  description: 'Util para rolear, puedes simular que has realizado una accion.',
  aliases: ['yo', 'accion'],
  categoria: 'Diversion',
  execute(message, client, args) {
    if(message.deletable) message.delete()
    let texto = args.join(' ')
    if(!texto) {
      return message.channel.send('Escriba la accion que quiere simular.')
        .then(m => m.delete({ timeout: 4000}))
    }
    return message.channel.send(`> **${message.member.nickname || message.author.username}** *${texto}*`)
  }
}