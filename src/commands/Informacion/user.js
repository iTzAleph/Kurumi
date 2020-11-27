const Discord = require('discord.js')

module.exports = {
  name: 'user',
  description: 'Muestra la informacion principal del usuario mencionado.',
  aliases: ['userinfo', 'u', 'ui', 'infouser', 'usuario', 'infousuario'],
  categoria: 'Informacion',
  execute(message, client, args) {
    let estados = {
        "online": ":green_circle: En linea",
        "dnd": ":no_entry_sign: No molestar",
        "idle": ":crescent_moon: Ausente",
        "offline": ":black_circle: Desconectado"
    }
    let usuario = message.guild.members.cache.find(e =>  e.user.username.startsWith(args[0])) || message.guild.members.resolve(args[0]) || message.mentions.members.first() || message.member
    if(!usuario) {
      return message.channel.send('Debe un usuario dentro de este servidor.')
    }
    let actividad = usuario.presence.activities

    const moment = require("moment");
    require('moment-duration-format');

    const creada = moment.duration(Date.now() - usuario.user.createdAt).format("D [dias]");
    const unido = moment.duration(Date.now() - usuario.joinedAt).format("D [dias]");

    if(usuario.nickname != null) apodo = usuario.nickname
    else apodo = usuario.user.username

    let embed = new Discord.MessageEmbed()
      .setAuthor(usuario.user.username, usuario.user.displayAvatarURL())
      .setThumbnail(usuario.user.displayAvatarURL({dynamic: true}))
      .setColor('BLUE')
      .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
      .addField('> **ID**', usuario.user.id)
      .addField('> **Tag**', usuario.user.tag)
      .addField('> **Apodo**', `:pencil2: ${apodo}`, true)
      .addField('> **Estado**', `${estados[usuario.user.presence.status]}`, true)
      .addField('> **Cuenta creada el**', ':date: ' + usuario.user.createdAt.toLocaleDateString() + '\n (Hace ' + creada + ')', true)
      .addField('> **Se unio al servidor**', ':date: ' + usuario.joinedAt.toLocaleDateString() + '\n (Hace ' + unido + ')', true)
      .addField('> **Actividades**', ':video_game: ' + usuario.user.presence.activities.join(" | "), true)
      .addField('> **Roles**', ':triangular_flag_on_post: ' + usuario.roles.cache.size, true)
      .addField('> **Roles**', `${usuario.roles.cache.filter(e => e.id !== message.guild.id).map(e => e).join(' | ')}`)
      .setTimestamp()
    message.channel.send(embed)
  }
}