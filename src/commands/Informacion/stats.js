const Discord = require('discord.js')

module.exports = {
  name: 'stats',
  description: 'Muestra mis estadisticas.',
  aliases: ['estadisticas', 'botstats'],
  categoria: 'Informacion',
  execute(message, client, args) {
    let embed = new Discord.MessageEmbed()
      .setAuthor('Kurumi Stats', client.user.displayAvatarURL())
      .addField('> Servidores', `:satellite: ${client.guilds.cache.size.toLocaleString()}`, true)
      .addField('> Usuarios', `:mens: ${client.users.cache.size.toLocaleString()}`, true)
      .addField('> Canales', `:speech_left: ${client.channels.cache.size.toLocaleString()}`, true)
      .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
      .setColor('BLUE')
      .setTimestamp()
    message.channel.send(embed);
  }
}