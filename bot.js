const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setColor(65280)
  .setDescription("Тут должно что-то быть.")
  .setFooter("ZOOPARK")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	if (command == 'Лс проверка') {
	  const embed = new Discord.RichEmbed()
	  .setColor(65280)
	  .setDescription("Тут должно что-то быть.")
	  .setFooter("ZOOPARK")
	  .setTimestamp()
	  message.author.send({embed});
	}

	if(command === "say" && message.author.id == "207821802431315968" || message.author.id == "356456653916340224" ) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  	}
});

client.login(process.env.BOT_TOKEN);
