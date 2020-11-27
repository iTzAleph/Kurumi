const Discord = require('discord.js')

module.exports = {
  name: 'bot',
  description: 'Muestra toda mi informacion de sistema',
  aliases: ['botinfo', 'infobot', 'b', 'bi'],
  categoria: 'Informacion',
  execute(message, client, args) {
    const moment = require("moment");
    require('moment-duration-format');

    const actividad = moment.duration(client.uptime).format("D [dias], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setFooter(' Pedido por ' + message.author.username, message.author.displayAvatarURL())
      .setAuthor('Información de ' + client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .addField('> Links', `[Invitame a tu servidor!](https://discord.com/oauth2/authorize?client_id=751568503450107915&permissions=8&scope=bot)`)
      .addField('> Creador', ':wrench: <@413757069615955969>', true)
      .addField('> Lenguaje', `:pencil:  JavaScript`, true)
      .addField('> Versión', ':arrow_up: Full v1.0', true)
      .addField('> Librería', ':dividers: discord.js v12', true)
      .addField('> Memoria', `:floppy_disk: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField('> Tiempo en línea', `:clock1: ${actividad}`, true)
      .addField('> Servidores', `:satellite: ${client.guilds.cache.size.toLocaleString()}`, true)
      .addField('> Usuarios', `:mens: ${client.users.cache.size.toLocaleString()}`, true)
      .addField('> Canales', `:speech_left: ${client.channels.cache.size.toLocaleString()}`, true)
      .setTimestamp()
    message.channel.send(embed) 
  }
}