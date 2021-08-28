const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Skwerton')
        .setURL('https://twitch.tv/Skwerton')
        .setColor('#800080')
        .setFooter('Skwerty-skwerton bot', 'https://cdn.discordapp.com/attachments/859845496058413099/860100180363313192/4e0ced5b6e4cdffec801177a8995bec6.jpg'))
    },
    name: 'twitchs'
}