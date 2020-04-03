const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
    const yardimenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis Yardım Menüsü 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Elvis Bot Gerekli Linkler`, `**》[Beni Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=528885635985965058&scope=bot&permissions=2146958847) 《 》 [Destek Sunucumuza Gel](https://discord.gg/3z64aqE) 《**`)
      .addField(`》 Komutlar`, `**》 ${prefix}eğlence-2** = Elvis eğlence komutları 2'yi gösterir. \n**》 ${prefix}eğlence** = Elvis eğlence komutlarını gösterir. \n**》 ${prefix}moderasyon** = Elvis moderasyon komutlarını gösterir. \n**》 ${prefix}sunucu** = Elvis sunucuya özel ayar komutlarını gösterir. \n**》 ${prefix}yetkili** = Elvis yetkili komutlarını gösterir. \n**》 ${prefix}kullanıcı** = Elvis kullanıcı komutlarını gösterir. \n**》 ${prefix}fotoğraf** = Elvis fotoğraf komutlarını gösterir. \n**》 ${prefix}müzik** = Elvis müzik komutlarını gösterir.`)
    
    message.channel.sendEmbed(yardimenu);
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'yardim', 'help', 'y'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
  
};
