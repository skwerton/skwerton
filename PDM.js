const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Réglement Concessionnaire')
        .setColor('#00FF00')
        .addField('')
        .setThumbnail('https://cdn.discordapp.com/attachments/870735888005599272/870969420418277416/telecharge_2.png')
        .setFooter('Skwerty-skwerton bot')
        .setTimestamp())
    },
    name: 'embedp'
}