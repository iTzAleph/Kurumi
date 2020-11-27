const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Comando de ayuda',
  aliases: ['ayuda', 'comandos', 'commands', 'h'],
  categoria: 'Informacion',
  execute(message, client, args) {
    let prefix = process.env.prefix
    let ncomandos = client.commands.size - 2
    let ndiversion = client.commands.filter(e => e.categoria == 'Diversion').size
    let ninformacion = client.commands.filter(e => e.categoria == 'Informacion').size
    let ninteraccion = client.commands.filter(e => e.categoria == 'Interaccion').size
    let nmoderacion = client.commands.filter(e => e.categoria == 'Moderacion').size
    let nutiles = client.commands.filter(e => e.categoria == 'Utiles').size
    

    if(!args[0]) {
      let embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setTitle(':notepad_spiral: Lista de Comandos')
        .setDescription('Hola **'+ message.author.username + '**!. Mi nombre es Kurumi Tokisaki, soy un bot hecho para que tu estancia en este servidor sea divertida.')
        .setThumbnail(client.user.displayAvatarURL())
        .addField('Aquí tienes una lista con todos mis comandos.', 'Total de comandos: **' + ncomandos + '**')
        .addField('> :calling: Links', '[Invitame a tu servidor!](https://discord.com/oauth2/authorize?client_id=751568503450107915&permissions=8&scope=bot)')
        .addField('> :joy: Diversión • [' + ndiversion + ']' , '`' + client.commands.filter(e => e.categoria == 'Diversion').map(e => e.name).join('`|`') + '`')
        .addField('> :information_source: Información • [' + ninformacion + ']', '`' + client.commands.filter(e => e.categoria == 'Informacion').map(e => e.name).join('`|`') + '`')
        .addField('> :speech_balloon: Interacción • [' + ninteraccion + ']', '`' + client.commands.filter(e => e.categoria == 'Interaccion').map(e => e.name).join('`|`') + '`')
        .addField('> :wrench: Moderación • [' + nmoderacion + ']', '`' + client.commands.filter(e => e.categoria == 'Moderacion').map(e => e.name).join('`|`') + '`')
        .addField('> :game_die: Útiles • [' + nutiles + ']', '`' + client.commands.filter(e => e.categoria == 'Utiles').map(e => e.name).join('`|`') + '`')
        .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
        .setColor('BLUE')
        .setTimestamp()
      message.channel.send(embed)
    }
  }
}