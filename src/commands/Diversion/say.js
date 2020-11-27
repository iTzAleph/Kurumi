const Discord = require('discord.js')

module.exports = {
  name: 'say',
  description: 'Si dices algo yo lo repetire y se borrara tu mensaje',
  aliases: ['decir', 's'],
  categoria: 'Diversion',
  execute(message, client, args) {
    if(message.deletable) message.delete()
    let texto = args.join(' ')
    if(!texto) {
      return message.channel.send('Escriba lo que desea decir.')
        .then(m => m.delete({ timeout: 4000}))
    }
    message.channel.send(texto)
  }
}