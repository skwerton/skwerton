const Discord = require('discord.js'),
config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('vous n\' avez pas la permission d\' utiliser cette commande')
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Il faut mentionner le membre a bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('vous ne pouvez pas bannir le fondateur')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('vous ne pouvez pas bannir un modérateur.')
        if (!member.bannable) return message.channel.send('Je ne peux pas bannir ce membre.')
        const reason = args.slice(1).join(' ' ) || 'Aucune raison fournie.'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni !`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[BAN] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .addField('durée', '∞')
        .setColor ('FF0000'))
    },
    name: 'ban',
    guildOnly: true,
    help: {
        description: 'Banni un membre du serveur',
        syntax: '<@membre> [raison]'
    }
}