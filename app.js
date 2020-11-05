const React =require('react');
const Discord = require('discord');
const client = Discord.Client();

client.on('ready', ()=>{
    console.log(`ready, Log in as ${client.user.tag}.`);
});

