const db = require('quick.db');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var footer = ayarlar.footer

exports.run = (bot, message, args, func) => {
  if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
  
    if (!message.member.hasPermission("MANAGE_GUILD"))
            return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`)
        db.delete(`prefix_${message.guild.id}`, args.join('  ')).then(ü => {
            //message.channel.send(`Prefix sıfırlandı.`)
          const embed = new Discord.RichEmbed()
            .setDescription('Prefix Başarıyla Sıfırlandı')
            .setColor(0xFFFFFF)
            .setFooter(footer)
            .setAuthor(`Elvis | Prefix Sistemi`, `${bot.user.avatarURL}`)
          
          message.channel.send({embed}).then(message => message.delete(8000))
        })

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix-sıfırla',
    description: 'Prefixi sıfırlar',
    usage: 'prefix-sıfırla'
};