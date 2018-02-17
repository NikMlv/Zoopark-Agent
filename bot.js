nst Discord = require('discord.js');
const client = new Discord.Client();
const rule = {st_admin: "371003132983115777", ml_admin: "371003796454899712", st_moder: "394505884266528788", ml_moder: "371003753781788684", meow: "&401720942818099200"}
const creators = ['207821802431315968', '168255014282854401']


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setTitle('Добро пожаловать')
  .setColor("#ee83ac")
  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**") *")
  .setFooter("JonedVoice")
  .setThumbnail("https://cdn.discordapp.com/attachments/404577060292526080/414409956024909825/unnamed.png")
  .setTimestamp()
  member.send({embed});
});

	if (command == 'тест_приветствия') {
	  const embed = new Discord.RichEmbed()
	  .setTitle('Добро пожаловать')
	  .setColor("#ee83ac")
	  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**")
	  .setFooter("JonedVoice")
	  .setThumbnail("https://cdn.discordapp.com/attachments/404577060292526080/414409956024909825/unnamed.png")
	  .setTimestamp()
	  message.author.send({embed});
	} else if (command === "say" && creators.includes(message.author.id)) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(O_o=>{message.reply('Тут должен быть текст но его нету');});
  	} else if (command === "clear") {
  		if(!message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.meow].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Права у MeowGMS!");
		message.delete();
		let content = message.content.slice(process.env.PREFIX.length + 8);
		let messagecount = parseInt(args[0])+1;
		let msc = messagecount -1;
		if (messagecount > 2) {
			message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
			let lol = declOfNum(msc, ['сообщение', 'сообщения', 'сообщений']);
			message.channel.send(`Удалено ${msc} ${lol}!`).then(msg => {msg.delete(5000)});
		} else {
			message.author.send({embed: {
				color: 16711680,
				title: "Ошибка удаления сообщений",
				description: `\`${content}\` либо меньше двух, либо не является числом.`,
				footer: {
				  	text: "ZOOPARK",
			  	},
			}});
		}
	} else if (command === "аватарка" && creators.includes(message.author.id)) {
		let member = message.mentions.members.first();
		if (!member) {
			message.delete();
			message.author.send({embed: {
				color: 16711680,
				title: "Ошибка вывода",
				description: `Тот, у кого вы пытались узнать аватарку не существует.`,
				footer: {
				  	text: "ZOOPARK",
			  	},
			}});
		}
		message.channel.send(member.user.avatarURL)
		const embed = new Discord.RichEmbed()
		.setTitle(`Аватарка пользователя ${member.user.username}#${member.user.tag}`)
		.setImage(member.user.avatarURL)
		.setFooter("JonedVoice")
		.setColor(${parseInt(getRandomInt(0,16777214), 16));
	} else if (command == "помощь" || command == "помошь" || command == "помощ" || command == "помош" || command == "помоги" || command == "памаги" || command == "хэлп" || command == "хелп" || command == "help") {
		var cmds = null;
		if (creators.includes(message.author.id)) {
			cmds = cmds + `\`${process.env.PREFIX}скажи [текст]\` - написать сообщение от имени бота.\n`;
		}
		if(message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.meow].includes(r.id)) || creators.includes(message.author.id)) {
			cmds = cmds + `\`${process.env.PREFIX}очистить [кол-во]\` - очистить определённое кол-во сообщений.\n`;
		}
		cmds = cmds + `\`${process.env.PREFIX}аватарка [упоминание человека]\` - узнать аватарку.\n`;
		const embed = new Discord.RichEmbed()
		.setTitle(`Помощь`)
		.setFooter("ZOOPARK")
		.setColor(parseInt(getRandomInt(0,16777214), 16))
		.setDescription(cmds);
	} else {
		message.reply({embed: {
			color: 16711680,
			title: "Ошибка",
			description: `Комманды \`${command}\` нету либо недоступна.`,
			footer: {
			  	text: "ZOOPARK",
		  	},
		}})
	}
});

client.login(process.env.BOT_TOKEN);
