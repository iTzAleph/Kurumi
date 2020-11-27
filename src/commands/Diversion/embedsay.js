const Discord = require('discord.js')

module.exports = {
  name: 'embedsay',
  description: 'Si dices algo yo lo repetire en un mensaje embed y se borrara tu mensaje',
  aliases: ['esay', 'es', 'embeds'],
  categoria: 'Diversion',
  execute(message, client, args) {
    if(message.deletable) message.delete()
    let texto = args.join(' ')
    if(!texto) {
      return message.channel.send('Escriba lo que desea decir.')
        .then(m => m.delete({ timeout: 4000}))
    }
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(texto)
    message.channel.send(embed)
  }
}