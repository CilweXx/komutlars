const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var yapimci = ayarlar.yapimci

exports.run = function(client, message, args) {
if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {

  const embed = new Discord.RichEmbed()
      .setDescription(`Toplamda **${args[0]}** Adet Mesajı Sildim. ✅`)
      .setFooter(yapimci)
      .setColor(0xFFFFFF)
      .setTitle(`Elvis Mesaj Temizleme Hizmeti`)
    message.channel.send({embed}).then(msg => (msg.delete(3000)));
    
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'temizle'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};