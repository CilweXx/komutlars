const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimin kıza bakacağını yazmadın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana kızla bakışmak için bir fırsat verdi kaçırma!**')
	.setImage(`https://img-s2.onedio.com/id-54c675c3b33294a56bfbb1f7/rev-0/w-500/s-441ab6d047d743c85dd5e6a313eea922ff6dca2b.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kbakışma',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};