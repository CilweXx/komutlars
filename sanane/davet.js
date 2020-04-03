const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var footer = ayarlar.footer;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.author.send({embed:{
	  author: {
		name: "Davet",
		icon_url: "https://cdn.discordapp.com/attachments/544885344143671306/546723662682914844/Elvis-Bot.png"
	  },
      color: 0xFFFFFF, //"b80000"
	    footer: {
        icon_url: client.user.avatarURL,
        text: (ayarlar.footer)
		},
      fields:[
        {
			name:"Elvis Davet Linkim",
			value:"**Beni sunucuna eklemek için** [**__tıkla__**](https://discordapp.com/oauth2/authorize?client_id=528885635985965058&scope=bot&permissions=2146958847)",
			inline:true
        }
		]
	}})
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('📩 Davet linkimi özelden gönderdim. Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'invite', 'davet', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
