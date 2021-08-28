const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Robx9')
        .setURL('https://twitch.tv/Robx9')
        .setColor('#800080')
        .setFooter('Skwerty-skwerton bot', 'https://cdn.discordapp.com/attachments/859845496058413099/860100180363313192/4e0ced5b6e4cdffec801177a8995bec6.jpg'))
    },
    name: 'twitchr'
}