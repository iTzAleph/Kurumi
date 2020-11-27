const Discord = require('discord.js')

module.exports = {
  name: 'coin',
  description: 'Gira una moneda',
  aliases: ['flipcoin', 'flipacoin', 'moneda'],
  categoria: 'Diversion',
  execute(message, client, args) {
        var coin = ['Cara', 'Sello']
    let embed = new Discord.MessageEmbed()
        .setTitle(':coin: Moneda')
        .addField('> ' + message.author.username + ' lanzo una moneda', 'La moneda saco: **' + coin[Math.floor(Math.random() * coin.length)] + '**')
        .setColor('RANDOM')
    message.channel.send(embed)
  }
}