const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!params[0]) {
    
    const imgmenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Müzik Komutları`, `**》 ${prefix}oynat <İsim/URL>** = İsmini yazdığınız veya linkini yazdığınız şarkıyı oynatır. \n**》 ${prefix}duraklat** = Çalan şarkıyı olduğu noktada durdurmanızı sağlar. \n**》 ${prefix}devam** = Duraklattığınız şarkıyı devam ettirmenizi sağlar. \n**》 ${prefix}durdur** = Çalmakta olan şarkıyı durdurup botu odadan çıkarmanızı sağlar. \n**》 ${prefix}sıra** = Sırada olan şarkıları görmenizi sağlar. \n**》 ${prefix}çalan** = O anda çalan şarkı hakkında bilgi verir. \n**》 ${prefix}radyo** = Türk Radyoları Çalarsınız. \n**》 ${prefix}bitir** = Açtığınız Radyo'yu kapatır.`)
    
    message.channel.sendEmbed(imgmenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['müzik'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'müzik',
  description: 'müzik',
  usage: 'müzik'
  
};
