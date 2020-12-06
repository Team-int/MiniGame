const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js');
const setting = require('../setting.json');

exports.run=(client, msg, args)=>{
    console.log(msg.author);
    let embed = new Discord.MessageEmbed().setColor('BLUE').setTitle(`${msg.author.username}님의 레벨`);
    let user=setting.levels.find((element)=>{
        if(msg.author.id===element.id){
            return true;
        }
    });
    embed.addField(`레벨: ${user.level}`, `경험치: ${user.exp}`, true);
    msg.channel.send(embed);
}
exports.name="level"