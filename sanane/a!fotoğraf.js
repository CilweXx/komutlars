const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!params[0]) {
    
    const imgmenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Fotoğraf Komutları`, `**》 ${prefix}avatar <@İsim>** = Birinin avatarını yakından görmek için kullanabilirsiniz. \n**》 ${prefix}tr** = Avatarınıza Türk Bayrağı ekler. \n**》 ${prefix}winner** = Kazanan siz olun! \n**》 ${prefix}tersavatar** Avatarınızın renklerini tersine çevirir. \n**》 ${prefix}brilliance** = Avatarınıza \`Brilliance\` efekti verir. \n**》 ${prefix}bravery** = Avatarınıza \`Bravery\` efekti verir. \n**》 ${prefix}nitro** = Avatarınızı \`Nitro\` efekti verir.`)
    
    message.channel.sendEmbed(imgmenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['fotoğraf'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'fotoğraf',
  description: 'fotoğraf',
  usage: 'fotoğraf'
  
};
