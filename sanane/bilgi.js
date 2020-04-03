const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var yapimci = ayarlar.yapimci;
var tekversion = ayarlar.tekversion;

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Bilgi Mesajımı Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", ` ${yapimci} ` , )
  .addField("**❯ Sürüm**", ` ${tekversion} `, )
  .addField("**❯ Yapıldığı Tarih**", " 11 Ocak 2019 ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=528885635985965058&scope=bot&permissions=2146958847)", )
	.addField("**❯ Destek Sunucusu**", " [Destek Sunucusu](https://discord.gg/3z64aqE)", )

	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
