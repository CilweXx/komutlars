const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var footer = ayarlar.footer;

exports.run = async (client, message) => {

  const embed = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "Bulunmuyor"}`)
  .setFooter(ayarlar.footer)
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true, //komut kullanılabilir durumdamı değil mi onu belirtiyoruz true veya false olarak
  aliases: ["roles"], //komutu asıl ismi dışında kullanabileceğimiz isimleri yazıyorsunuz
  permLevel: 0, /*Kullanabilecek yetkiyi belirtiyorsunuz bulunan yetkilerin sayıları:
  0 = Yetki gerekmez herkes kullanabilir.
  1 = Mesjları Yönet yetkisi gerekir.
  2 = Üyeleri At yetkisi gerekir.
  3 = Üyeleri Yasakla yetkisi gerekir.
  4 = Yönetici yetkisi gerekir.
  5 = Bot yapımcısı olmak gerekir.
  */
  kategori: "sunucu" //Komutun kategorisini belirtiyoruz
};

exports.help = {
  name: "roller", //Komutun ismini belirtiyoruz
  description: "Sunucudaki rolleri gösterir.", //Komutun açıklamasını yazıyoruz
  usage: "roller" //Komutun Doğru Kullanım'ını yazıyoruz
};