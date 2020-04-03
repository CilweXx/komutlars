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
		name: "Resmi Elvis Discord Sunucusu",
		icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQ4NWZw5UuQOeMz6zRmKqwuWlwPxiHMUxA04Wc82TA6wuw--2Ng"
	  },
      color: 0xFFFFFF, //"b80000"
	    footer: {
        icon_url: client.user.avatarURL,
        text: (ayarlar.footer)
		},
      fields:[
        {
			name:"Resmi Elvis Discord Sunucusu Linki",
			value:"**Resmi `Elvis` discord sunucusuna gelmek için ** [**__buraya tıkla__**](https://discord.gg/3z64aqE)",
			inline:true
        }
		]
	}})
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('📩 Resmi `Elvis` discord sunucusunun linkini özelden gönderdim. Özel mesajlarını kontrol et. :postbox:');
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
  guildOnly: true,
  aliases: ['s', 'destek', 'd'],
  permLevel: 0
};

exports.help = {
  name: 'discord',
  description: 'Botun resmi discord linkini gönderir.',
  usage: 'discord'
};
