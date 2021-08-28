const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Partenariat Benny\'s')
        .setColor('#00FF00')
        .addField('Avantages Benny\'s', `-25% sur toutes voitures qu'un employé du Benny's vient acheter (vérifier son rôle sur radio D)`)
        .addField('Avantages PDM', `-20% sur nos customs au Benny's 
        -50% sur leurs kits de réparations`)
        .setThumbnail('https://cdn.discordapp.com/attachments/870735888005599272/870969420418277416/telecharge_2.png')
        .setFooter('Skwerty-skwerton bot')
        .setTimestamp())
    },
    name: 'embedp'
}