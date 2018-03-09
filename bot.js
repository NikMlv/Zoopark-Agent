const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {
    owner: "421560772930437130"
}
const util = require("util");
const creators = ['207821802431315968, 356456653916340224'];
const idtext = "Ваш ID: ";

client.on("guildMemberAdd", member => {
    const embed = new Discord.RichEmbed()
        .setColor(8126719)
        .setTitle("Добро пожаловать")
        .setDescription("\nПриветствую тебя на сервере **ZOOPARK**!\n\nЭто официальный дискорд-сервер **Happy Wolf'a**. \n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в <#416832026155548679> (**#rules**), также, советую прочесть канал <#417274723119005697> (**#info**), в котором собрана вся информация о сервере.\n\nОбязательно проверяй <#401720121498009600> (#updates) и <#401717233518116865> (#news), ведь там ты сможешь найти много чего интерсного.\n\nДля того, чтобы тебе было комфортно находиться на нашем сервере, тебе нужно будет подтвердить свой дискорд аккаунт с помощью номера телефона (**привязать номер к Вашему аккаунту**).\n\n***Главное будь дружелюбным*** по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет.\n\n***Удачи!***")
        .setFooter("ZOOPARK")
        .setThumbnail("https://cdn.discordapp.com/attachments/419483401012117509/420226491708866560/Information-595b40b75ba036ed117d9e51.png")
        .setTimestamp()
    member.send({
        embed
    });
});
client.on('ready', () => {
    console.log('Bot loaded');
    client.user.setPresence({
        game: {
            name: `ZOOPARK`,
            type: 2
        }
    }).catch();
});
client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == 'test_greetings') {
        message.delete().catch(O_o => {});
        const embed = new Discord.RichEmbed()
            .setColor(8126719)
            .setTitle("Добро пожаловать")
            .setDescription("\nПриветствую тебя на сервере **ZOOPARK**!\n\nЭто официальный дискорд-сервер **Happy Wolf'a**. \n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в <#416832026155548679> (**#rules**), также, советую прочесть канал <#417274723119005697> (**#info**), в котором собрана вся информация о сервере.\n\nОбязательно проверяй <#401720121498009600> (#updates) и <#401717233518116865> (#news), ведь там ты сможешь найти много чего интерсного.\n\nДля того, чтобы тебе было комфортно находиться на нашем сервере, тебе нужно будет подтвердить свой дискорд аккаунт с помощью номера телефона (**привязать номер к Вашему аккаунту**).\n\n***Главное будь дружелюбным*** по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет.\n\n***Удачи!***")
            .setFooter("ZOOPARK")
            .setThumbnail("https://cdn.discordapp.com/attachments/419483401012117509/420226491708866560/Information-595b40b75ba036ed117d9e51.png")
            .setTimestamp()
        message.author.send({
            embed
        });
    }
    if (command === "say" && (message.author.id == "168255014282854401" || message.author.id == "207821802431315968" || message.author.id == "356456653916340224")) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
    if (command === "upd-embed" && (message.author.id == "356456653916340224")) {
        message.delete().catch(O_o => {});
        const embed = new Discord.RichEmbed()
            .setColor(32768)
            .setTitle("Обновление")
            .setDescription("Из-за неактивности удалён **daun-oldfag-chat**. В будущем он скорее всего вернётся в виде обычного чата для олдфагов, причем в основных чатах будет наблюдаться большой актив.")
            .setFooter("ZOOPARK")
            .setTimestamp()
        message.channel.send({
            embed
        });
    }
    if (command === "news-embed" && (message.author.id == "356456653916340224")) {
        message.delete().catch(O_o => {});
        const embed = new Discord.RichEmbed()
            .setColor(32768)
            .setTitle("Объявление")
            .setDescription("")
            .setFooter("ZOOPARK")
            .setTimestamp()
        message.channel.send({
            embed
        });
    }
    if (command === "channel" && (message.author.id == "356456653916340224")) {
        message.delete().catch(O_o => {});
        TestYouTube();
    }
});

client.on('message', message => {
    if (message.content === 'zp!avatar') {
        message.delete().catch(O_o => {});
        message.reply(message.author.avatarURL);
    }
});

client.on('message', message => {
    if (message.content === 'zp!papers,please') {
        message.delete().catch(O_o => {});
        username = message.author.username
        avatar = message.author.avatarURL
        verified = "Нет"
        if (message.author.verified == true) {
            verified = "Да"
        }
        const embed = new Discord.RichEmbed()
            .setColor(16772322)
            .setTitle(username)
            .addField("ID пользователя:", message.author.id, false)
            .addField("Полный никнейм: ", message.author.tag, true)
            .addField("Создан: ", message.author.createdAt, true)
            .addField("Аккаунт верифицирован? ", verified, true)
            .setThumbnail(avatar)
            .setFooter("ZOOPARK")
        message.channel.send({
            embed
        });
    }
});

/* client.on('message', message => {
    if (message.content === 'zp!zooparkinfo') {
        message.delete().catch(O_o => {});
        avatar = guild.avatarURL

        const embed = new Discord.RichEmbed()
            .setColor(16772322)
            .setTitle(ZOOPARK)
            .addField("ID сервера:", guild.id, false)
            .setThumbnail(avatar)
            .setFooter("Информация о нашем сервере")
        message.channel.send({
            embed
        });
    }
});

if (['emulate', 'terminal', 'eval', 'эмулировать', 'эвал', 'терминал'].includes(command) && creators.includes(message.author.id)) {
    try {
        let code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = util.inspect(evaled);
        message.guild.channels.get('421725889726775303').send('Был эмулирован код: ' + evaled);
        message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
} */
client.login(process.env.BOT_TOKEN);
