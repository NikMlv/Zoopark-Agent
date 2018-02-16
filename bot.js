const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.send({embed: {
	  color: 65280,
	  description: "Данный текст увидят все новые люди на сервере ZOOPARK"
	}});
});
client.on("message", message => {
	if (message.content == '.Проверка_лс') {
		  message.member.send({embed: {
	  color: 65280,
	  description: "Данный текст увидят все новые люди на сервере ZOOPARK."
	}});
	}
});

client.login(process.env.BOT_TOKEN);
