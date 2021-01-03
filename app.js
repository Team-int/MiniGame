const Discord = require('discord.js');
const client = new Discord.Client();
let setting = require('./setting.json');
const fs = require('fs');
const sys = require("util");
const express = require('express');
const http = require('http');

const vs = require('')



let app = express();
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render("index");
});
app.get('/view/:sitename', function(req, res){
    res.render(req.params.sitename);
});
app.listen(80);

client.commands = new Discord.Collection();


client.commands.load = dir => {
    for (const file of fs.readdirSync(dir)) {
        const cmd = require(`./commands/${file}`);
        client.commands.set(cmd.name, cmd);
      }
      console.log(client.commands.map(c => c.name).join(', ') + ' 명령어가 로드.');
}

client.commands.load(__dirname + "/commands");


const prefix = setting.prefix;

client.on('ready', ()=>{
    console.log(`ready, Log in as ${client.user.tag}.`);
});

client.on('message', (msg)=>{
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)){
                if(setting.levels.find((element)=>{
                    if(msg.author.id===element.id){
                        element.exp++;
                        if(element.level !== (element.exp - element.exp%100)/100+1){
                            element.level=(element.exp - element.exp%100)/100+1;
                            msg.channel.send(`${msg.author}님의 레벨이 ${element.level}이 되었습니다.`);
                        }
                        return true;
                    }
                })){
                    fs.writeFileSync('setting.json', JSON.stringify(setting));
                    setting = require('./setting.json');
                    return;
                }
                var levels = setting.levels;
                var adOb = Object();
                adOb.id=msg.author.id;
                adOb.level=0;
                adOb.exp=0;
                levels.push(adOb);
                setting.levels=levels;
                console.log(setting);
                fs.writeFileSync('setting.json', JSON.stringify(setting));
                setting = require('./setting.json');
        return;
    }

    if(msg.content.slice(0, prefix.length) !== prefix) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let cmdC = client.commands.get(cmd);
    if(cmdC) cmdC.run(client, msg, args);
    
});

client.login(setting.token);