const Discord = require('discord.js')

module.exports = {
  name: 'eval',
  description: 'Comando para evaluar codigo',
  aliases: ['e'],
  categoria: '',
  async execute(message, client, args) {
    const Discord = require('discord.js')
    const Util = require('util')

    if(message.author != '413757069615955969') {
      return message.reply('No tienes el permiso para usar este comando.')
      .then(m => m.delete({ timeout: 4000}))
    }
    if (!args[0]) {
      return message.channel.send('Ingrece el codigo que desea evaluar.')
      .then(m => m.delete({ timeout: 4000}))
    }

    try {
      let output = await eval(args.join(' '))
      let type = typeof output;
      if (typeof output !== 'string') output = Util.inspect(output, { depth: 0})

      if (output.length >= 1020) output = `${output.substr(0, 1010)}...`;

      let embed2 = new Discord.MessageEmbed()
        .setAuthor('Kurumi Eval', client.user.displayAvatarURL())
        .setDescription(':white_check_mark: El codigo se a evaluado correctamente.')
        .addField('> :incoming_envelope: Evaluado en', `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\n\`\`\``, true)
        .addField('> :page_facing_up: Tipo', `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\n\`\`\``, true)
        .addField('> :inbox_tray: Entrada', `\`\`\`js\n${args.join(' ')}\n\`\`\``)
        .addField('> :outbox_tray: Salida', `\`\`\`js\n${output.replace(process.env.token, 'ADONDE IBAS MASTER 😎')}\n\`\`\``)
        .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
        .setColor('GREEN')
        .setTimestamp()
      message.channel.send(embed2)
      } catch (err) {
      let embed3 = new Discord.MessageEmbed()
        .setAuthor('Kurumi Eval', client.user.displayAvatarURL())
        .setDescription(':x: Hubo un error al evaluar el codigo.')
        .addField('> :page_facing_up: Tipo', `\`\`\`prolog\n${err.name}\n\`\`\``, true)
        .addField('> :x: Error', `\`\`\`js\n${err.message}\n\`\`\``, true)
        .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
        .setColor('RED')
        .setTimestamp()
      message.channel.send(embed3)
    }
  }
}