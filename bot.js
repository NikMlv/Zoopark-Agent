const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {meow: "401720942818099200"};
const creators = ['207821802431315968','356456653916340224];

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setColor(65280)
  .setTitle("Добро пожаловать")
  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**")
  .setFooter("ZOOPARK")
  .setThumbnail("https://cdn.discordapp.com/attachments/404577060292526080/414409956024909825/unnamed.png")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	if (command == 'test_greetings') {
	  const embed = new Discord.RichEmbed()
	  .setColor(65280)
	  .setTitle("Добро пожаловать")
	  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**")
	  .setFooter("ZOOPARK")
	  .setThumbnail("https://cdn.discordapp.com/attachments/404577060292526080/414409956024909825/unnamed.png")
	  .setTimestamp()
	  message.author.send({embed});
	}

	if(command === "say" && (creators.includes(message.author.id) || message.member.roles.some(r=>[rule., rule.meow].includes(r.id)))) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  	}
});

client.login(process.env.BOT_TOKEN);
