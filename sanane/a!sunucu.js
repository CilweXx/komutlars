const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!params[0]) {
    
    const sunucumenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Sunucuya Özel Ayar Komutları`, `**》 ${prefix}prefix <istediğiniz prefix>** = Bu komut ile sunucunuzda varsayılan olan \`a!\` prefixini değiştirmenize yarar. \n**》 ${prefix}prefix-sıfırla** = Manuel olarak ayarladığınız prefix'i sıfırlamanıza yarar. \n**》 ${prefix}küfür <aç-kapat>** = Sunucunuzda ki küfür engelini açıp kapatmanızı sağlar. \n**》 ${prefix}reklam <aç-kapat>** = Sunucuzda ki reklam engelini açıp kapatmanızı sağlar. \n**》 ${prefix}yavaş-mod <1-120>** = Kullandığınız odaya belirttiğiniz saniye kadar yavaş mod koyar. \n**》 ${prefix}sayaç <hedef> #Kanal** = Belirlediğiniz hedefin sayacını belirlediğiniz kanala gönderir. \n**》 ${prefix}otorol @Rol #Kanal** = Belirlediğiniz rolü otomatik olarak verir ve mesajlarını belirlediğiniz kanala gönderir. \n**》 ${prefix}gç-ayarla #Kanal** = Ayarladığınız kanala resimli giriş-çıkış mesajlarını gönderir. \n**》 ${prefix}sa-as #Kanal** = Selamün Aleyküm yazı'sına cevap verir.`)
    
    message.channel.sendEmbed(sunucumenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'sunucu',
  description: 'sunucu',
  usage: 'sunucu'
  
};
