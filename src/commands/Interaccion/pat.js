const Discord = require('discord.js')

module.exports = {
  name: 'pat',
  description: 'Puedes acariciar a quien quieras.',
  aliases: ['acariciar', 'caricias'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    var gif = [
      'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif', 
      'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif', 
      'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif', 
      'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif', 
      'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif', 
      'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif', 
      'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif', 
      'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif', 
      'https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif'
    ];
    let usuario = client.users.cache.find(e =>  e.username.startsWith(args[0])) || client.users.resolve(args[0]) || message.mentions.users.first()
    if(!usuario) { 
      var frase = cariño = [
        `> ¡Te acariciare un poquito **${message.author.username}**!`,
        `> ¡Dejame acariciarte **${message.author.username}**!`,
    ]} else {
      var frase = cariño2 = [
        `> **${usuario.username}** recibe caricias con cariño por **${message.author.username}**`, 
        `> **${usuario.username}** es acariciado por **${message.author.username}**`, 
        `> **${message.author.username}** acaricia con amor a **${usuario.username}**`,
        `> **${message.author.username}** le da caricias a **${usuario.username}**`,
      ]}
    let embed = new Discord.MessageEmbed()
      .setDescription(frase[Math.floor(Math.random() * frase.length)])
      .setImage(gif[Math.floor(Math.random() * gif.length)])
      .setColor('RANDOM')
    message.channel.send(embed)
  }
}