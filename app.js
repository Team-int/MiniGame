const Discord = require('discord.js');
const client = new Discord.Client();
const setting = require('./setting.json');
const fs = require('fs');
const sys = require("util");
const express = require('express');
const http = require('http');

let app = express();
app.get('/', function(req, res){
    res.send("<h1>int 미니게임봇</h1>");
    
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
    if (!msg.content.startsWith(prefix)) return;
    if (msg.content.slice(0, prefix.length) !== prefix) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let cmdC = client.commands.get(cmd);

    if(cmdC) cmdC.run(client, msg, args);
});

client.login(setting.token);