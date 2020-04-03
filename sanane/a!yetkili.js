const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!params[0]) {
    
    const ownmenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Yetkililere Özel Komutlar`, `**》 ${prefix}sunucutanıt** = 12 saatte bir defa olmak üzere sunucunuzu Resmi Elvis sunucularında paylaşın. \n**》 ${prefix}oylama <konu>** = İstediğiniz konu hakkında oylama yapın. \n**》 ${prefix}ban-liste ** = Banlanan Kişilerin listesini gösterir.`)
    
    message.channel.sendEmbed(ownmenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'yetkili',
  description: 'yetkili',
  usage: 'yetkili'
  
};
