const Discord = require('discord.js')

module.exports = {
  name: 'twerk',
  description: 'Puedes perrear solo o con quien quieras.',
  aliases: ['perrear', 'perreo'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    var gif = [
      'https://cdn.discordapp.com/attachments/734127810729214055/749866438814203984/emoji.gif', 
      'https://cdn.discordapp.com/attachments/715308223648759818/749887593927147600/tenor_1.gif', 
      'https://media.giphy.com/media/l0MYDqSxggigxz7Pi/giphy.gif', 
      'https://i.pinimg.com/originals/5f/f0/72/5ff07215d93741ca674e0a8ad14bcb3d.gif'
    ];

    let usuario = client.users.cache.find(e =>  e.username.startsWith(args[0])) || client.users.resolve(args[0]) || message.mentions.users.first()
    if(!usuario) { 
      var frase = perrear = [
        `> ¡**${message.author.username}** se a puesto a perrear!`,
        `> ¡Miren como se mueve **${message.author.username}** !`,
        `> ¡Miren como perrea **${message.author.username}** !`,
    ]} else {
      var frase = perrear2 = [
        `> **${message.author.username}** le perrea a **${usuario.username}** 7w7`, 
        `> **${message.author.username}** le esta perreando a **${usuario.username}** owo`, 
        `> **${message.author.username}** perrea con **${usuario.username}** o///o`
      ]}
    let embed = new Discord.MessageEmbed()
      .setDescription(frase[Math.floor(Math.random() * frase.length)])
      .setImage(gif[Math.floor(Math.random() * gif.length)])
      .setColor('RANDOM')
    message.channel.send(embed)
  }
}