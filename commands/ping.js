const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const embed = new Discord.MessageEmbed().setColor('BLUE').setTitle('PONG!').setDescription('Ping Pong!').addField('', `${client.ws.ping}`);
    msg.channel.send(embed);
};
exports.name = "ping";