const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'jv!привет') {
    	message.reply('привет!');
  	}
});


client.on('message', message => {
    if (message.content === 'jv!пока') {
    	message.reply('ну пока((((9(') {
  	}
});

    // не убирать это блять
client.login(process.env.BOT_TOKEN);
