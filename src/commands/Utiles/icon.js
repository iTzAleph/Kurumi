const Discord = require('discord.js')

module.exports = {
  name: 'icon',
  description: 'Muestra el icono del servidor.',
  aliases: ['icono', 'servericon', 'i'],
  categoria: 'Utiles',
  execute(message, client, args) {
    var server = message.guild;
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Icono de ' + server.name)
      .setDescription(`> [Icon URL](${server.iconURL({size : 4096, dynamic: true, format: 'png'})})`)
      .setImage(server.iconURL({size : 4096, dynamic: true, format: 'png'}))
      .setFooter('Pedido por ' + message.author.username)
    message.channel.send(embed);
  }
}