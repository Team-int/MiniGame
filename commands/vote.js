const Discord = require('discord.js');
const { send } = require('process');
const sys= require('util');
const fs = require('fs');


var options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: new Array(),
    pythonPath: "C:\\Users\\sungb\\AppData\\Local\\Programs\\Python\\Python38-32\\python"
};

exports.run = (client, msg, args) => {
    const emoji=["1️⃣", "2️⃣", "3️⃣", "4️⃣","5️⃣", "6️⃣","7️⃣","8️⃣","9️⃣","🔟"]
    if(args[0]=='\\open'){
        msg.channel.messages.fetch(args[1]).then(function(votemsg){
            let labelses = new Array();
            let datas = new Array();
            let voteEndEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`${votemsg.embeds[0].title}`)
                .setDescription(`${votemsg.embeds[0].title}에 관한 투표의 결과를 내보냅니다.`);
            
            for(var i=0; i<votemsg.embeds[0].fields.length-1; i++){
                console.log(votemsg.embeds[0].fields[i].name);
                console.log(votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).count);
                voteEndEmbed.addField(votemsg.embeds[0].fields[i].name+votemsg.embeds[0].fields[i].value, votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).count-1);
                labelses[i]=votemsg.embeds[0].fields[i].name;
                datas[i]=votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).count-1;
            }
            options.args[0]=votemsg.embeds[0].fields.length;
            let arr=new String();
            for(var i=0; i<votemsg.embeds[0].fields.length-1; i++){
                options.args[i+1]=votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).count-1;
                arr+=(" "+votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).count-1);
            }
            for(var i=0; i<votemsg.embeds[0].fields.length-1; i++){
                options.args[i+1+votemsg.embeds[0].fields.length]=votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).name;
                arr+=(" "+votemsg.reactions.cache.get(votemsg.embeds[0].fields[i].value).name);
            }
            msg.channel.send(voteEndEmbed);
        });
        return;
    }
    console.log(args, args.length);
    let votes;
    if(args.length>2 && args.length<12){
        votes = new Discord.MessageEmbed().setColor('BLUE').setTitle(`${args[0]}`);
        for(var i=0;i<args.length-1;i++){
            votes.addField(`${args[i+1]}`, `${emoji[i]}`);
        }
        msg.channel.send(votes).then(function(mymsg){
            for(var i=0;i<args.length-1;i++){
                mymsg.react(`${emoji[i]}`);
            }
            votes.addField('개표', `\\vote \\open ${mymsg.id}`, true);
            mymsg.edit(votes);
        });
    }
    else{
        msg.reply("3~11개의 매개변수가 필요합니다. \\vote 제목 값1 값2 형태로 해주세요.");
    }
};
exports.name = "vote";