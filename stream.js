const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**Robx9**: https://twitch.tv/Robx9
**GauthierLx**: https://twitch.tv/GauthierLx
**Skwerton**: https://twitch.tv/Skwerton
**Dorkman59**: https://twitch.tv/Dorkman59`)
        .setColor('#800080')
        .setFooter('Skwerty-skwerton bot', 'https://cdn.discordapp.com/attachments/859845496058413099/860100180363313192/4e0ced5b6e4cdffec801177a8995bec6.jpg')
        .setThumbnail('https://cdn.discordapp.com/attachments/480345320350547978/869198565619159080/OGDD.jpg'))
    },
    name: 'stream',
    help: {
        description: 'Liste des streamers de OGD'
    }
}