const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  var maxlen = 120
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Doğru kullanım: \`/yavaş-mod [0/10]\``)
                .setColor('FFFFFF')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.sendEmbed(new Discord.RichEmbed()
      .setDescription(`En fazla ${maxlen} kadar slowmode süresini aktif edebilirsin!`)
      .setColor('FFFFFF'));
}
    message.channel.sendEmbed(new Discord.RichEmbed()
      .setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
      .setColor('FFFFFF'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};