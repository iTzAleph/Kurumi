const Discord = require('discord.js')

module.exports = {
  name: 'spotify',
  description: 'Muestra la informacion de lo que esta escuchando un usuario a travez de Spotify.',
  aliases: ['sp'],
  categoria: 'Informacion',
  execute(message, client, args) {
    Humanize = require('humanize-duration')
    function Spotify(usuario, message) {
      let Usuario = client.users.cache.find(e =>  e.username.startsWith(args[0])) || client.users.resolve(args[0]) || message.mentions.users.first() || message.author
      const Spotify = Usuario.presence.activities.filter(e => e.name === 'Spotify');
      if (!Spotify.length) return message.channel.send('Este usuario no esta usando Spotify.');
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(Usuario.username + ' Esta en Spotify', 'https://cdn.iconscout.com/icon/free/png-256/spotify-11-432546.png')
          .setTitle(':pencil2: ' + Spotify.map(e => e.details))
          .addField('> Album', ':cd: ' + Spotify.map(e => e.assets.largeText))
          .addField('> Artista', ':bust_in_silhouette: ' + Spotify.map(e => e.state))
          .addField('> Duración', ':clock1: ' + Humanize(Math.floor(new Date(Spotify.map(e => e.timestamps.end)).getTime() - new Date(Spotify.map(e => e.timestamps.start))), { language: 'es', serialComma: false, conjunction: ' y ', round: true }))
          .setThumbnail(Spotify.map(e => e.assets.largeImageURL({ size: 4096, format: 'png' }))[0])
          .setFooter('Pedido por ' + message.author.username, message.author.displayAvatarURL())
          .setColor('00DA5A')
          .setTimestamp()
      );
    }
Spotify(message.author, message)
  }
}