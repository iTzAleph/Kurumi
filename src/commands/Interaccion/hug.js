const Discord = require('discord.js')

module.exports = {
  name: 'hug',
  description: 'Abraza o se abrazado con este comando.',
  aliases: ['abrazo', 'abrazar'],
  categoria: 'Interaccion',
  execute(message, client, args) {
    var gif = [
      'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
      'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
      'https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif',
      'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
      'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
      'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
      'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
      'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
      'https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif',
      'https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif',
      'https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif', 
      'https://media.giphy.com/media/rSNAVVANV5XhK/giphy.gif',
      'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
      'https://cdn.discordapp.com/attachments/399448944889036801/775862239634522132/tumblr_31b83555c0d7a32d40cd64096040172d_213c7648_500.gif',
      'https://cdn.discordapp.com/attachments/399448944889036801/775862239994839060/0EG6InR.gif',
      'https://cdn.discordapp.com/attachments/399448944889036801/775862007550705704/tenor_3.gif',
      'https://cdn.discordapp.com/attachments/399448944889036801/775809222637912086/93333792ca844973a81f254dae1a10ba0ebc10d8.gif',
      'https://imgur.com/bUV7Lns',
      'https://imgur.com/ARjKhxe',
      'https://cdn.discordapp.com/attachments/399448944889036801/768849155333554256/a0120675-d1d2-4946-9936-8c88c2edea52.gif',
      'https://imgur.com/9CDF8D7',
      'https://imgur.com/8ebaIAg',
      'https://cdn.discordapp.com/attachments/399448944889036801/767454297952223242/Yaoi_run_or_hug.gif',
      'https://imgur.com/orWzkXN',
      'https://imgur.com/pl3fL6x',
      'https://cdn.discordapp.com/attachments/399448944889036801/765175541237022730/d068937e-081c-487a-a521-25afaf3773ed.gif',
      'https://cdn.discordapp.com/attachments/399448944889036801/764868169575694346/unnamed_4.gif',
    ];
    let usuario = client.users.cache.find(e =>  e.username.startsWith(args[0])) ||client.users.resolve(args[0]) || message.mentions.users.first()
    if(!usuario) { 
      var frase = abrazo = [
        `> ¡Ten un abrazo **${message.author.username}**!`,
        `> ¡Dejame darte un abrazo **${message.author.username}**!`,
    ]} else {
      var frase = abrazo2 = [
        `> **${usuario.username}** a sido abrazado por **${message.author.username}**`,
        `> **${usuario.username}** resibe un lindo abrazo de **${message.author.username}**`, 
        `> **${message.author.username}** abraza con amor a **${usuario.username}**`,
        `> **${message.author.username}** le da un cariñoso abrazo a **${usuario.username}**`,
        `> **${usuario.username}** recibe un caluroso abrazo de **${message.author.username}**`
      ]}
    let embed = new Discord.MessageEmbed()
      .setDescription(frase[Math.floor(Math.random() * frase.length)])
      .setImage(gif[Math.floor(Math.random() * gif.length)])
      .setColor('RANDOM')
    message.channel.send(embed)
  }
}