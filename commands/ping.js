const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    msg.reply(`${client.ws.ping}`);
};
exports.name = "ping";