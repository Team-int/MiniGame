const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const embed = new Discord.MessageEmbed().setColor('BLUE').setTitle('PONG!').addField('ms', `${client.ws.ping}`, true);
    msg.channel.send(embed);
};
exports.name = "ping";