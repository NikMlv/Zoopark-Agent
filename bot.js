const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'privet') {
    	message.reply('privet!');
  	}
});

// не убирать это блять
client.login(process.env.BOT_TOKEN);
