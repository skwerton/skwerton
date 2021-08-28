const Discord = require('discord.js'),
config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'éxécuter cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('il faut mentionner le membre à mute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')
        if (!member.manageable) return message.channel.send('Je ne peux pas mute se membre.')
        const reason = args.slice(1).join   (' ') || 'Aucune raison fournie.'
        let muteRole = message.guild.roles.cache.find(role =>   role.name === 'Muted')
        if (!muteRole) {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    permissions: 0
                }
            })
            message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                CONNECT: false,
                ADD_REACTIONS: false,
                SPEAK: false
            }))
        }
        await member.roles.add(muteRole)
        message.channel.send(`${member} a bien été mute.`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[MUTE] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .addField('durée', '∞')
        .setColor ('#0000FF'))
    },
    name: 'mute',
    guildOnly: true,
    help: {
        description: 'Mute un membre du serveur',
        syntax: '<@membre> [raison]'
    }
}