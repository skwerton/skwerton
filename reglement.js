const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Règlement')
        .setDescription(`*Bienvenue sur la Radio D du Concessionnaire Automobile ! Avant de commencer à discuter avec tout le monde , veuillez prendre le temps de lire le reste du Règlement afin de vous familiariser avec les règles à suivres.*`)
        .setColor('#00FF00')
        .addField('**Règles**', `- Votre pseudonyme et votre avatar sur Discord ne doivent pas êtres à caractère pornographique, ne doivent pas contenir de propos racistes, homophobes, sexistes, ne doivent pas contenir des propos incitant à la haine envers une ethnie/religion.
        - Pas de troll, de flood ou de spam de mentions dans les salons textuels comme vocaux.
        - Soyez respectueux les uns envers les autres, aucune forme de discrimination n'est tolérée, Pas de discours de haine, racisme, sexisme, etc. et aucun contenu NSFW / Contenu nuisible et d'autres sujets incendiaires tels que la politique et la religion.
        - L'auto-promotion / promotion d'autres serveurs n'est autorisé et encore moins le SPAM de celui-ci,(sauf autorisation du staff).
        - Tout ce qui n'est pas inclus dans les règles précédentes, mais qui enfreint toujours Discord (https://discordapp.com/terms) est également sujet à suppression.`)
        .addField('ㅤ', `*Veuillez noter que la liste des règles ci-dessus n'est pas exhaustive. L'équipe de modération se réserve le droit de supprimer du contenu ou d'interdire les utilisateurs si nécessaire et si cela est jugé préjudiciable au serveur ou à l'expérience d'autrui. Tout contenu qui réduit l'expérience utilisateur du serveur peut et sera supprimé.*`)
        .setThumbnail('https://cdn.discordapp.com/attachments/870735888005599272/870969420418277416/telecharge_2.png')
        .setFooter('Skwerty-skwerton bot')
        .setTimestamp())
    },
    name: 'embedr'
}