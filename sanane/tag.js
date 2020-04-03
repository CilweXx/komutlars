const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.`);
  
  let tag = args[0];
  let xtag = db.fetch(`stag_${message.guild.id}`)
  
  if (!tag) return message.channel.send(`Bir Tag Belirlemesin! örnek: \`${prefix}tag-ayarla <tag>\``)
  
    if(args[0] === "sıfırla") {
    if(!xtag) {
      message.channel.send(`Ayarlanmayan Tagı Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`stag_${message.guild.id}`)
    message.channel.send(`Sunucu Tagı başarıyla sıfırlandı.`)
    return
  }
  
  db.set(`stag_${message.guild.id}`, tag)
  message.channel.send(`Sunucu Tagı Başarıyla \`${tag}\` Olarak Ayarlandı.`)
   
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tagayarla','tag-ayarla','tag-isim-ayarla'],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Tagı ayarlar.',
  usage: 'tag <sunucutagı>'
};