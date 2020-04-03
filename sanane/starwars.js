const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params) => {
  
 const aylar = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  }

  var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya :flag_ru:'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika :flag_us: '
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika :flag_us: '
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika :flag_us: '
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika :flag_us: '
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya :flag_br:'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur :flag_sg:'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney :flag_sh:'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa :flag_eu:'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Avrupa :flag_eu:'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong :flag_hk: '
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya :flag_jp:'
        }
       if (message.guild.region === "south-africa") {
         var konum = 'Güney Afrika'
       }
  
   const embed = new Discord.RichEmbed()
   .setColor("FFFFFF")
   .setThumbnail(message.guild.iconURL)
   .setAuthor(`${message.guild.name} - Sunucu Bilgisi`, message.guild.iconURL)
   .addField("İsim", message.guild.name, true)
   .addField("ID", message.guild.id, true)
   .addField("Sunucu Bölgesi", konum || "Bilinmiyor", true)
   .addField("Sunucu Sahibi", message.guild.owner, true)
   .addField('Üyeler ['+message.guild.memberCount+']', `Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status === "online").size} \nRahatsız Etmeyin: ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} \nBoşta: ${message.guild.members.filter(m => m.user.presence.status === "idle").size} \nÇevrimdışı: ${message.guild.members.filter(m => m.user.presence.status === "offline").size} \nBot: ${message.guild.members.filter(m => m.user.bot).size}`, true)
   .addField('Kanallar ['+message.guild.channels.size+']', `📝Yazı: ${message.guild.channels.filter(c => c.type === "text").size} \n🔊Sesli: ${message.guild.channels.filter(c => c.type === "voice").size} \n📋Kategori: ${message.guild.channels.filter(c => c.type === "category").size} \n💤AFK Kanalı: ${message.guild.afkChannel ? message.guild.afkChannel : "Bulunmuyor"}`, true)
   .addField('Roller ['+message.guild.roles.size+']', `${ayarlar.prefix}roller yazarak görebilirsiniz.`, true)
   .addField('Emojiler ['+message.guild.emojis.size+']', `${ayarlar.prefix}emojiler yazarak görebilirsiniz.`, true)
   .addField("Sunucu Tarihi", `${moment(message.guild.createdAt).format('DD')} ${aylar[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY HH:mm:ss')}`, true)
   message.channel.send({embed: embed});
 };

 exports.conf = {
  enabled: true, //komut kullanılabilir durumdamı değil mi onu belirtiyoruz true veya false olarak
  aliases: ["server", "sunucu", "sunucubilgi", "sb"], //komutu asıl ismi dışında kullanabileceğimiz isimleri yazıyorsunuz
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
  name: "sunucu-bilgi", //Komutun ismini belirtiyoruz
  description: "Bulunulan sunucu hakkında bilgi verir.", //Komutun açıklamasını yazıyoruz
  usage: "sunucu-bilgi" //Komutun Doğru Kullanım'ını yazıyoruz
};