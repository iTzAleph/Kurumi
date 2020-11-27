const Discord = require('discord.js')

module.exports = {
  name: 'kiss',
  description: 'Puedes besar a quien desees pero recomiendo que no engañes a nadie.',
  aliases: ['besar', 'beso'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    var gif = [
      'https://media.giphy.com/media/gTLfgIRwAiWOc/giphy.gif', 
      'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif', 
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif', 
      'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif', 
      'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif', 
      'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif', 
      'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif', 
      'https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif', 
      'https://media.giphy.com/media/ofF5ftkB75n2/giphy.gif', 
      'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif', 
      'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif', 
      'https://media.giphy.com/media/sS7Jac8n7L3Ve/giphy.gif', 
      'https://media.giphy.com/media/U9lRsXbwlbL4k/giphy.gif',
    ];
    let usuario = client.users.cache.find(e =>  e.username.startsWith(args[0])) || client.users.resolve(args[0]) || message.mentions.users.first()
    if(!usuario) return message.reply('Debe mencionar al usuario al que quiere besar o///o.')
    var beso = [
      `> **${usuario.username}** a sido besado por **${message.author.username}** owo`, 
      `> **${usuario.username}** resibe un besito por **${message.author.username}** >///<`, 
      `> **${message.author.username}** besa con amor a **${usuario.username}** >///<`,
      `> **${message.author.username}** le dio un beso a **${usuario.username}** o///o`,
      `> **${usuario.username}** ha recibido un beso de **${message.author.username}** o///o`,
    ]

    let embed = new Discord.MessageEmbed()
      .setDescription(beso[Math.floor(Math.random() * beso.length)])
      .setImage(gif[Math.floor(Math.random() * gif.length)])
      .setColor('RANDOM')
    message.channel.send(embed)
  }
}