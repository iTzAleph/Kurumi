module.exports = {
    name: 'hola',
    description: 'dice hola',
    aliases: ['decir'],
    categoria: 'Diversion',
    execute(message, client, args) {

        message.channel.send('Hola')
    }
}