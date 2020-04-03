const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komut Ve Bot İle İlgili Yenilikleri Özel Mesaj a Gönderdim. Bakabilirsin. :warning:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("YENİLİKLER")
  .setAuthor("Elvis-Bot | Yenilikler", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("\n**Level Sistemi geldi. \n**Radyo Sistemi geldi.")
  .setFooter('Yenilikler', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yeni", "yenilik"],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bot Yeni gelen komutları veya bot ile ilgili yenilikleri verir..',
  usage: 'yenilikler'
}; 