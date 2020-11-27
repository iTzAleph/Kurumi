const Discord = require('discord.js')

module.exports = {
  name: 'clear',
  description: 'Sirve para borrar mensajes',
  aliases: ['purge', 'vaciar', 'c', 'borrar'],
  categoria: 'Moderacion',
  execute(message, client, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("No tienes los permisos necesarios para usar este comando.")
        .then(m => m.delete({ timeout: 6000}))
    }
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("No tengo permisos para borrar mensages.")
        .then(m => m.delete({ timeout: 6000}))
    }

    let cantidad = parseInt(args[0])
    
    if (!args[0]) { 
      return message.channel.send("Ingresa la cantidad de mensages que desea eliminar.")
        .then(m => m.delete({ timeout: 6000}))
    }

    if (cantidad > 100) {
      return message.channel.send("No puedes eliminar más de 100 mensajes.")
        .then(m => m.delete({ timeout: 6000}))
    }
    message.channel.bulkDelete(cantidad);
    message.channel.send(`**${cantidad}** han sido eliminados.`)
      .then(m => m.delete({ timeout: 4000}))
  }
}