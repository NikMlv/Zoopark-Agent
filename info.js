const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'jv!info') {
    	message.reply('инфы нету)00');
  	}
});
//нельзя трогать
client.login(process.env.BOT_TOKEN);
