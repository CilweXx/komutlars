const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
    console.log(`${prefix}istatistik komutu ` + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

     const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
     const istatistikler = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setFooter('Elvis', bot.user.avatarURL)
    .addField("• Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB' + " / 32 GB", true)  
    .addField("• Çalışma süresi", duration)
    .addField("• Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("• Sunucular", bot.guilds.size.toLocaleString(), true)
    .addField("• Kanallar", bot.channels.size.toLocaleString(), true)
    .addField("• Discord.js Sürüm", "v"+Discord.version, true)
    .addField(`• Node.JS sürüm`, `${process.version}`, true)
    .addField("• Ping", bot.ping+" ms", true)
    .addField("• Bot Davet", " [Davet linkim için __tıkla__yın](https://discordapp.com/oauth2/authorize?client_id=528885635985965058&scope=bot&permissions=2146958847)", )
    .addField("• Destek Sunucu", "[Destek sunucumuza katılmak için __tıkla__yınız](https://discord.gg/3z64aqE)", )
    return message.channel.send(istatistikler);
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i', 'durum', 'bot-durum', 'istatistik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistik gösterir.',
    usage: 'istatistik'
  };
  