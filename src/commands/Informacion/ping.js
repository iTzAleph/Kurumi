const Discord = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'Muestra mi ping',
  aliases: ['ms', 'p'],
  categoria: 'Informacion',
  execute(message, client, args) {
    message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor('Kurumi Ping', client.user.displayAvatarURL())
    .setDescription(`> 📨 Mensajes: **${Math.floor(Date.now() - message.createdTimestamp)}ms**\n> 🛰️ Discord API: **${client.ws.ping}ms**`)
    .setColor('BLUE')
    )
  }
}