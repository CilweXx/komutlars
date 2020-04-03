const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
      
    const funnymenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Eğlence-2 Komutları`, `**》 ${prefix}kbakışma** = Etiketlediğiniz kişiyi kızla bakışmak için fırsat verir. \n**》 ${prefix}efkar-vs** = Etiketlediğiniz iki kişinin efkarını karşılaştırır. \n**》 ${prefix}çiz** = Resim Çizersiniz.`)
      
    message.channel.sendEmbed(funnymenu);
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence', 'eglence'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'eğlence-2',
  description: 'eğlence-2',
  usage: 'eğlence-2'
  
};
