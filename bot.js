const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Fonctionnement Bot')
        .addField('Modération', `**BAN:** s!ban @membre banni la personne mentionnée(avoir la permission de bannir)
        **KICK:** s!kick @membre, expulse la personne mentionnée(avoir la permission d' expulsé)
        **MUTE:** s!mute @membre, mute la personne mentionnée(avoir la permission de gérer les messages)
        **UNMUTE:** s!unmute @membre, demute la personne mentionnée(avoir la permission de gérer les messages)
        **TEMPBAN:** s!tempban @membre *durée(s,m ou h)*, banni la personne mentionnée pendant la durée indiquée (avoir la permission de bannir)
        **TEMPMUTE:** s!tempmute @membre *durée(s,m ou h)*, Mute la personne mentionnée(avoir la permission de gérer les messages)
        *Pour chacunes des commandes si dessus, vous pouvez ajouter une raison (ex: s!kick @membre raison)*`)
        .addField('Infractions', `**WARN:** s!warn @membre *raison(obligatoire)*, averti la personne mentionnée(avoir la permission de gérer les messages)
        **UNWARN:** s!unwarn @membre *numéro du warn(1,2,3,...)*, retire un avertissement de la personne mentionnée(avoir la permission de gérer les messages)
        **INFRACTIONS:** s!infractions @membre, liste les infractions de la personne mentionnée`)
        .addField('Autre', `**CLEAR:** s!clear *nombre*, permet de supprimés le nombre de messages demandé(avoir la permission de gérer les messages)
        **USER-INFO:** s!user-info @membre, permet d'avoir des informations sur la personne mentionnée
        *si besoin de créer un message Embed envoyez moi en mp ce que vous voulez mettre dans votre message, pour toutes questions ou informations complémentaires, MP skwerton#0001*`)
        .setColor('#00FFFF')
        .setFooter('Skwerty-skwerton bot'))
    },
    name: 'ebot'
}