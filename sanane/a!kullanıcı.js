const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!params[0]) {
    
    const usrmenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Kullanıcı Komutları`, `**》 ${prefix}davet** = Botu sunucunuza eklemek istiyorsanız bu komutu kullanmalısınız. \n**》 ${prefix}discord** = Resmi @Elvis discord sunucusunun linkini gönderir. \n**》 ${prefix}yetkilerim** = Sunucuda sahip olduğunuz yetkileri görmenizi sağlar. \n**》 ${prefix}tavsiye <mesajınız>** = Bize bildirmek istediğiniz tavsiyeleriniz varsa bekliyoruz. \n**》 ${prefix}bug <mesajınız>** = Bot hakkında bir bug-açık gördüyseniz bunu bize bildirin! \n**》 ${prefix}report** = Sunucuda \`Report\` adında oda açıp bir kişiyi şikayet edebilirsiniz. \n**》 ${prefix}bilgi** = Bot hakkında basit bilgiler verir. \n**》 ${prefix}istatistik** = Bot hakkında detaylı bilgi verir. \n**》 ${prefix}sunucu-bilgi** = Sunucu hakkında daha fazla bilgi verir. \n**》 ${prefix}roller** = Sunucuda olan bütün rolleri gösterir. \n**》 ${prefix}emojiler** = Sunucuya yüklenen bütün emojileri gösterir. \n**》 ${prefix}profil** = Profiliniz hakkında bilgi verir. \n**》 ${prefix}havadurumu <şehir>** = Yazdığınız şehir hakkındaki hava durumunu gösterir.`)
    
    message.channel.sendEmbed(usrmenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'kullanıcı',
  description: 'kullanıcı',
  usage: 'kullanıcı'
  
};
