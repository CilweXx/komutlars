const db = require('quick.db');

exports.run = (bot, message, args, func) => {
if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")  
    if (!message.member.hasPermission("MANAGE_GUILD"))
            return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`)
        if (!args[0])
            return message.channel.send(` Prefix girmelisiniz.`)
        db.set(`prefix_${message.guild.id}`, args.join('  ')).then(ü => {
            message.channel.send(` Prefix **${ü}** olarak seçilmiştir.`)
        })

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix', 'ön-ek'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix-ayarla',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix-ayarla [tavsiye]'
};