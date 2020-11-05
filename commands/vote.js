const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const emoji=[":one:", ":two:", ":three:", ":four:",":five:", ":six:",":seven:",":eight:",":nine:",":keycap_ten:"]
    console.log(args, args.length);
    let votes;
    if(args.length>2 && args.length<12){
        votes = new Discord.MessageEmbed().setColor('BLUE').setTitle(`${args[0]}`);
        for(var i=0;i<args.length-1;i++){
            votes.addField(`${args[i+1]}`, `${emoji[i]}`);
        }
        msg.channel.send(votes);
    }
};
exports.name = "vote";