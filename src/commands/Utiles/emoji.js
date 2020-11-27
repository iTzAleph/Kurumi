const Discord = require('discord.js')

module.exports = {
  name: 'emoji',
  description: 'Muestra el emoji personalizado seleccionado.',
  aliases: ['jumbo'],
  categoria: 'Utiles',
  execute(message, client, args) {
    if (!args[0]) {
      return message.channel.send('Ponga el emoji que desea ver.')
        .then(m => m.delete({ timeout: 4000}))
    }
    if (!args[0].includes(':')) {
      return message.channel.send('Ponga el emoji que desea ver.')
        .then(m => m.delete({ timeout: 4000}))
    }

    let emoji = Discord.Util.parseEmoji(args.join(' '))
    let link = `https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1`
    if (emoji.animated === true) link = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?v=1`

    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(emoji.name)
      .setDescription(`> [Emoji URL](${link})`)
      .setImage(link)
      .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed)
  }
}