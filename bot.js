const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {
    owner: "419607803905441796"
}
const creators = ['207821802431315968'];

client.on("guildMemberAdd", member => {
    const embed = new Discord.RichEmbed()
        .setColor(8126719)
        .setTitle("Добро пожаловать")
        .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в <#416832026155548679> (**#rules**), также, советую прочесть канал <#417274723119005697> (**#info**), в котором собрана вся информация о сервере.\n\nОбязательно проверяй <#401720121498009600> (**#updates**) и <#401717233518116865> (**#news**), ведь там ты сможешь найти много чего интерсного. \n\nДля того, чтобы тебе было комфортно находиться на нашем сервере, **тебе нужно будет подтвердить свой дискорд аккаунт с помощью номера телефона** (привязать номер к Вашему аккаунту).\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**")
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
            name: `куда-то`,
            type: 3
        }
    }).catch();
});
client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == 'test_greetings') {
        const embed = new Discord.RichEmbed()
            .setColor(8126719)
            .setTitle("Добро пожаловать")
            .setDescription("\nПриветствую тебя на сервере ZOOPARK!\nЭто официальный дискорд-сервер **Happy Wolf'a**.\n\nПожалуйста, прочти и соблюдай правила, которые ты сможешь найти в <#416832026155548679> (**#rules**), также, советую прочесть канал <#417274723119005697> (**#info**), в котором собрана вся информация о сервере.\n\nОбязательно проверяй <#401720121498009600> (**#updates**) и <#401717233518116865> (**#news**), ведь там ты сможешь найти много чего интерсного. \n\nДля того, чтобы тебе было комфортно находиться на нашем сервере, **тебе нужно будет подтвердить свой дискорд аккаунт с помощью номера телефона** (привязать номер к Вашему аккаунту).\n\nГлавное будь дружелюбным по отношению к другим участникам, а также соблюдай правила, и тогда никаких проблем не будет. \n\n**Удачи!**")
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
    client.on('message', message => {
        if (message.content === 'zp!avatar') {
            message.reply(message.author.avatarURL);
        }
    });
    client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find('name', 'member-log');
        if (!channel) return;
        channel.send(`Добро пожаловать, ${member}`);
    });
});
client.login(process.env.BOT_TOKEN);
