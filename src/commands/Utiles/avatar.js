const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'Sirve para ver el avatar de un usuario.',
  aliases: ['a', 'av'],
  categoria: 'Utiles',
  execute(message, client, args) {

    const user = client.users.cache.find(e =>  e.username.startsWith(args[0])) ||client.users.resolve(args[0]) || message.mentions.users.first() || message.author

    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField('Avatar de ' + user.username, `> [Avatar URL](${user.displayAvatarURL({size : 4096, dynamic: true, format: 'png'})})`)
      .setImage(user.displayAvatarURL({size : 4096, dynamic: true, format: 'png'}))
      .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed) 
  }
}