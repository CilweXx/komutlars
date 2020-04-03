const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var footer = ayarlar.footer;

exports.run = async (client, message) => {

  const embed = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.emojis.map(e => e).join(' **|** ') || "Bulunmuyor"}`)
  .setFooter(ayarlar.footer)
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true, //komut kullanılabilir durumdamı değil mi onu belirtiyoruz true veya false olarak
  aliases: ["emojis"], //komutu asıl ismi dışında kullanabileceğimiz isimleri yazıyorsunuz
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
  name: "emojiler", //Komutun ismini belirtiyoruz
  description: "Sunucudaki emojileri gösterir.", //Komutun açıklamasını yazıyoruz
  usage: "emojiler" //Komutun Doğru Kullanım'ını yazıyoruz
};