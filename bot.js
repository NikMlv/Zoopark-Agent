const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {st_admin: "371003132983115777", ml_admin: "371003796454899712", st_moder: "394505884266528788", ml_moder: "371003753781788684", creator: "406442606273363990"}
const creators = ['207821802431315968', '356456653916340224']


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setTitle('Добро пожаловать')
  .setColor("#ee83ac")
  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
  .setFooter("JonedVoice")
  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if (message.channel.id == '409054265626329105') {
      	message.react("👍");
      	message.react("👎");
	}

	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	if (command == 'test_greetings') {
	  const embed = new Discord.RichEmbed()
	  .setTitle('Добро пожаловать')
	  .setColor("#ee83ac")
	  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
	  .setFooter("JonedVoice")
	  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
	  .setTimestamp()
	  message.author.send({embed});
	} else if (command === "say" && creators.includes(message.author.id)) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(O_o=>{message.reply('ты ебобо?');});
  	} else if (command === "clear") {
  		if(!message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)))
  			return message.reply("Извините, ебобобам слово не давали!");
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
				  	text: "JonedVoice",
			  	},
			}});
		}
	} else if (command === "test") {

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
