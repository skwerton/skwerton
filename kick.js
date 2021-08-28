const Discord = require('discord.js'),
config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('vousn\' avez pas la permission d\' utiliser cette commande')
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Il faut mentionner le membre a exclure.')
        if (member.id === message.guild.ownerID) return message.channel.send('vous ne pouvez pas exclure un modérateur')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('vous ne pouvez pas exclure un modérateur.')
        if (!member.kickable) return message.channel.send('Je ne peux pas exclure ce membre.')
        const reason = args.slice(1).join(' ' ) || 'Aucune raison fournie.'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été expulsé !`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[KICK] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .setColor ('#00FF00'))
    },
    name: 'kick',
    guildOnly: true,
    help: {
        description: 'Exclu un membre du serveur.',
        syntax: '<@membre> [raison]'
    }
}