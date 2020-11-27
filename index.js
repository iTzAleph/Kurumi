const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()

    // Index
const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = process.env.prefix

client.commands = new Discord.Collection()

    // Handler
const ArchivosComandos = require('fs').readdirSync('./src/commands').filter(file => file.endsWith('.js'))

for (const Folder of require('./handler')()) {
    const FolderFile = require('fs').readdirSync(`./src/commands/${Folder}`)
    for (const File of FolderFile) {
      ArchivosComandos.push([Folder, File])
    }
}
    
for (const file of ArchivosComandos) {
    let cmd;
    if (Array.isArray(file)) cmd = require(`./src/commands/${file[0]}/${file[1]}`)
    else cmd = require(`./src/commands/${file}`)

    client.commands.set(cmd.name, cmd)
    }

    // Eventos
client.on('ready', () => {
    console.log(`El bot ${client.user.tag} a iniciado correctamente.`)

    client.user.setPresence( 
        {
        status: "online",
        activity: {
            name: `kr!help | ${client.guilds.cache.size} servidores. | Full v1.0`,
            type: "PLAYING"
            }
        }
    );
})
client.on('message', async (message) => {
  if (message.author.bot) return;
  
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(RegMention)) {
      return message.channel.send('Hola <@' + message.author.id + '> ! Mi nombre es Kurumi, mi prefix es `' + prefix + '`, para ver mi lista de comandos usa `' + prefix + 'help`.')
      .then(m => m.delete({ timeout: 8000}))
  }
  if (message.content === 'hola') return message.react('👋')
  if (message.content === 'hi') return message.react('👋')
  if (message.content === 'hello') return message.react('👋')
  if (message.content.includes('👍')) return message.react('👍')

  if (!message.content.startsWith(prefix)) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const cmdName = args.shift().toLowerCase()

  const command = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
  if (!command) return;

  try {    
      command.execute(message, client, args)
  } catch(error) {
      return console.error(error)
  }

})

    // Login
client.login(process.env.token)