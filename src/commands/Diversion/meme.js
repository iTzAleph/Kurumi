const Discord = require('discord.js')

module.exports = {
  name: 'meme',
  description: 'Sirve para ver memes random',
  aliases: ['memes'],
  categoria: 'Diversion',
  async execute(message, client, args) {
    const melphiworker = require('melphiworker')
    const meme = await melphiworker.memes()
    message.channel.send({files: [ meme ]})
  }
}