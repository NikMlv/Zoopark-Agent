const Discord = require('discord.js');
const client = new Discord.Client();
const creators = ['207821802431315968', '356456653916340224']


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setColor("#ee83ac")
  .setDescription("Тут должен быть текст но его нету.")
  .setFooter("ZOOPARK")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if (message.channel.id == '36125913962984243>') {
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
	  .setDescription("Тут должен быть текст но его нет.")
	  .setFooter("ZOOPARK")
	  .setTimestamp()
	  message.author.send({embed});
	} else if (command === "say" && message.author.id == "356456653916340224") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(O_o=>{message.reply('Что-то пошло не так');});
  	} else if (command === "clear") {
  		if(!message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)) or !message.member)
  			return message.reply("Права есть токо у MeowGMS!");
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
			description: ` Комманды \`${command}\` нету! Либо у тебя нет прав.`,
			footer: {
			  	text: "ZOOPARK",
		  	},
		}})
	}
});

client.login(process.env.BOT_TOKEN);
