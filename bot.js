const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setColor(65280)
  .setTitle("Добро пожаловать")
  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер Happy Wolf'a.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в #rules, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\nУдачи!")
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
	  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер Happy Wolf'a.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в #rules, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\nУдачи!"
          .setFooter("ZOOPARK")
	  .setThumbnail("https://cdn.discordapp.com/attachments/404577060292526080/414409956024909825/unnamed.png")
	  .setTimestamp()
	  message.author.send({embed});
	}
	if(command === "say" && (message.author.id == "168255014282854401" || message.author.id == "207821802431315968")) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  	}else if (command == "remote_say") {
		if(!message.member.roles.some(r=>[rule.creator].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Нету прав.");
		if (message.channel.id = undefined) return message.author.send('Что-то нетак');
		let new_args = args;
		const chat = new_args.shift();
	 	const sayMessage = new_args.join(" ");
	 	console.log(chat);
	    message.guild.channels.get(chat).send(sayMessage).catch(O_o=>{message.reply('Нету прав');});
	    message.delete().catch(O_o=>{}); 
}});

client.login(process.env.BOT_TOKEN);
