const Discord = require('discord.js');
//const Moment = require('Moment.js');
const client = new Discord.Client();
const rule = {
    owner: "421560772930437130"
}
const creators = ['207821802431315968, 356456653916340224'];


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
            .setDescription("Маленький апдейт. Теперь каждый день в чате **#for-dj-bot** (в закрепленных сообщениях) будет выкладываться одна композиция (из Featured листа Одмена). Вы сможете оценить её и послушать с помощью муз. ботов.")
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
    if ((command === "nicktest") && (message.author.id == "356456653916340224")) {
        message.delete().catch(O_o => {});
        message.channel.send(message.author.username);
        if ((message.author.username.indexOf("🐺") != -1) && (message.author.id != "356456653916340224")) {
            message.channel.send("`Волк обнаружен!` Роль успешно выдана");
            message.member.addRole('421275327302467585');
        }
        if ((message.author.username.indexOf("🐺") = -1) && (message.author.id != "356456653916340224")) {
            message.channel.send("`Волка не обнаружено!` Роль не выдана.");
            message.member.removeRole('421275327302467585');
        }
        if (message.author.username.indexOf("MeowGMS") != -1) {
            message.channel.send("`Волк обнаружен!` Роль успешно выдана");
            message.member.addRole('421275327302467585');
        }
    };

    client.on('message', message => {
        if (message.content === 'zp!avatar') {
            message.delete().catch(O_o => {});
            message.reply(message.author.avatarURL);
        }
    });

    client.on('message', message => {
        if (message.content === 'zp!profile') {
            message.delete().catch(O_o => {});
            username = message.author.username
            avatar = message.author.avatarURL
            verified = "Нет"
            if (message.author.verified == true) {
                verified = "Да"
                userID = message.author.id
            }
            const embed = new Discord.RichEmbed()
                .setColor(16772322)
                .setTitle(username)
                .addField("ID пользователя:", message.author.id, false)
                .addField("Полный никнейм: ", message.author.tag, false)
                .addField("Создан: ", message.author.createdAt, false)
                .addField("Аккаунт верифицирован? ", verified, false)
                //.addField("Joined At", `${moment.utc(message.author.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
                //.addField("Вы присоеднилсь к серверу: ", message.guild.joinedAt, false)
                .setThumbnail(avatar)
                .setFooter("ZOOPARK")
            message.channel.send({
                embed
            });
        }
    });

    client.on('message', message => {
        if (message.content === 'zp!zoopark') {
            message.delete().catch(O_o => {});
            avatar = message.guild.iconURL
            const embed = new Discord.RichEmbed()
                .setColor(16772322)
                .setTitle("Информация о сервере ZOOPARK")
                .addField("Кол-во человек на сервере:", message.guild.memberCount, false)
                .addField("Уровень Верификации:", message.guild.verificationLevel, false)
                .addField("Создан: ", message.guild.createdAt, false)
                .setThumbnail(avatar)
                .setFooter("ZOOPARK")
            message.channel.send({
                embed
            });
        }
    });
    client.on('message', message => {
        if (message.content === "zp!purge") {
            message.delete().catch(O_o => {});
            /*const deleteCount = parseInt(args[0], 10);

            if (!deleteCount || deleteCount < 2 || deleteCount > 100)
                return message.reply("Неверное кол-во сообщений");

            const fetched = await message.channel.fetchMessages({
                count: deleteCount
            });
            message.channel.bulkDelete(fetched)
                .catch(error => message.reply(`Couldn't delete messages because of: ${error}`)); */
        }
    })
});
client.login(process.env.BOT_TOKEN);
