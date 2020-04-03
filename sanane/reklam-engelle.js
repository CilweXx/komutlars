const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
  
  if (!args[0]) return message.channel.send('<:hayir:523940654527545355>**Yanlış bir terim uyguladınız.** Uygulayabileceğiniz terimler;\n`?reklam aç`\n`?reklamengel aç`')
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:hayir:523940654527545355>```yaml\nBu terimi uygulamak için Mesajları Yönet yetkisine sahip olmalısınız.\n```')
  
  if (args[0] == 'aç') {
      db.set(`reklam_${message.guild.id}`, 'Açık').then(i => {
      message.channel.send('**<:evet:523940654301315082> Reklam engelleme sistemi başarıyla açıldı. Yanlışlıkla bile de olsa mesajlarınızı silebilir.\nBunu `a!reklam kapat` yazarak kapatabilirsiniz.**\n**Ayrıca `Mesajları Yönet yetkisine sahip kullanıcıların mesajları silinmeyecek.**')
      message.react("😊")
    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'Kapalı').then(i => {
      message.channel.send('**<:hayir:523940654527545355> Reklam engelleme sistemi başarıyla kapatıldı.\nArtık herkes discord.gg tarzında link atabilir.**')
      message.react("😡 ")
    })
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['reklam-engel','reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'reklamengel',
  usage: 'reklamengel'
};