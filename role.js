const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Rôles')
        .setColor('#0000FF')
        .addField('**Rôles**', `Rocket League: :rocket_league: 
        Mario-Kart: :Mario: 
        Among Us: :amongus: 
        Rogue Compagny: :Rogue_Compagny: 
        Warzone: :Call_Of_Duty: 
        Fortnite: :fortnite: 
        Apex: :apex: 
        GTA Rp: :gtarp: 
        Overwatch: :overwatch: 
        Fall Guys: :Fall_Guys: 
        Counter Strike: :csgo: 
        Minecraft: :minecraft: 
        FIFA: :fifa: 
        Notifs Streamers: :twitch: **`)
        .setThumbnail('https://cdn.discordapp.com/attachments/480345320350547978/869198565619159080/OGDD.jpg')
        .setFooter('Skwerty-skwerton bot',))
    },
    name: 'eroles'
}