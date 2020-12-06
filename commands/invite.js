const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const embed = new Discord.MessageEmbed().setColor('BLUE').setTitle('INVITE!').addField('초대링크', `https://discord.com/api/oauth2/authorize?client_id=773827044328603701&permissions=268823632&scope=bot`, true);
    msg.channel.send(embed);
};
exports.name = "invite";