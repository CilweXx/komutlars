const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yapıcağın Oylamanın İsmin Yaz');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('OYLAMA')
    .setColor (0xFFFFFF)
    .setDescription(`${mesaj} \n\n\ Evet İçin: :thumbsup: Hayır İçin: :thumbsdown: `)
    message.channel.sendEmbed(embed).then(message=> {
      message.react('👍');
      setTimeout(function() {
          message.react('👎');
      }, 100);    
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
