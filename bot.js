const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {creator: "401720942818099200"}
const creators = ['207821802431315968', '356456653916340224']


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setColor("#ee83ac")
  .setTitle("Добро пожаловать")
  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**") 
  .setFooter("ZOOPARK")
  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if (message.channel.id == '411516585887531019') {
      	message.react("👍");
      	message.react("👎");
	}

	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	if (command == 'test_greetings') {
	  const embed = new Discord.RichEmbed()
	  .setColor("#ee83ac")
	  .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в **#rules**, как и описание ролей сервера.\n\nОбязательно проверяй #updates, ведь там можно найти много чего интерсного.\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**") 
	  .setFooter("JonedVoice")
	  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
	  .setTimestamp()
	  message.author.send({embed});
	} else if (command === "say" && message.author.id == "207821802431315968") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(O_o=>{message.reply('что-то не так');});
  	} else if (command === "clear") {
<<<<<<< HEAD
  		if(!message.member.roles.some(r=>[rule.creator].includes(r.id)) || !creators.includes(message.member.id))
=======
  		if(!message.member.roles.some(r=>[rule.creator].includes(r.id)) or !message.member)
>>>>>>> b430624074b1d8c5e439a381de62aac19e2044a1
  			return message.reply("Прав нету");
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
	} else {
		message.reply({embed: {
			color: 16711680,
			title: "Ошибка",
			description: `Комманды \`${command}\` нету!`,
			footer: {
			  	text: "ZOOPARK",
		  	},
		}})
	}
});

client.login(process.env.BOT_TOKEN);
