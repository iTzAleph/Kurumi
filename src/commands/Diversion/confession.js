const Discord = require('discord.js')

module.exports = {
  name: 'confession',
  description: 'Confiesa lo que quieras',
  aliases: ['confesar', 'confesion'],
  categoria: 'Diversion',
  execute(message, client, args) {
    let texto = args.join(' ');
    if(message.deletable) message.delete();
    if(!texto) {
      return message.reply('Escriba lo que desea confesar.')
        .then(m => m.delete({ timeout: 4000}))
    }
let autor = 'Anónimo'
if(args[0].toLowerCase() === 'name-') autor = message.author.username, texto = args.slice(1).join(' ');

    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(':shushing_face: Tenemos una nueva confesión!')
      .setDescription('> ' + autor + ' confiesa: **' + texto + '**')
      .setTimestamp()
    message.channel.send(embed);

  }
}