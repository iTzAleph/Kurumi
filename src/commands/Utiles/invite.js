const Discord = require('discord.js')

module.exports = {
  name: 'invite',
  description: 'Sirve para crear un enlace de invitacion al bot mencionado.',
  aliases: ['inv', 'invitar'],
  categoria: 'Utiles',
  execute(message, client, args) {
    let usuario = client.users.cache.find(e => e.username === args.join(' ')) || client.users.resolve(args[0]) || message.mentions.users.first()
    if(!usuario) return message.channel.send('Debe mencionar a algun bot dentro de este servidor')
    if(!usuario.bot) return message.channel.send('Debe mencionar a algun bot dentro de este servidor')

    let embed = new Discord.MessageEmbed()
        .setThumbnail(usuario.displayAvatarURL())
        .setColor('RANDOM')
        .setAuthor(usuario.username, usuario.displayAvatarURL())
        .addField(`Invita a ${usuario.username} tu servidor`, `> [Click aqui para invitar](https://discord.com/oauth2/authorize?client_id=${usuario.id}&permissions=8&scope=bot)`)
        .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
    message.channel.send(embed);
  }
}