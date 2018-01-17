+const Discord = require('discord.js');
 +const client = new Discord.Client();
 +
 +client.on('ready', () => {
 +    console.log('I am ready!');
 +});
 +
 +client.on('message', message => {
 +    if (message.content === 'ping') {
 +    	message.reply('pong');
 +  	}
 +});
 +
 +// THIS  MUST  BE  THIS  WAY
 +client.login(MzkzMzU2MzMxMDg1NDYzNTUy.DUDi2A.7Yx2v3MN5X9qg7ckBw5lc6-cBzY);
