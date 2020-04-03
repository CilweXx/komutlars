const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
      
    const funnymenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Eğlence Komutları`, `**》 ${prefix}disco-rol-ayarla** = Disco için rol ayarlar. \n**》 ${prefix}disko-başlat** = \`Disco\` adında rol var ise o role sahip kullanıcıların rengini sürekli değiştirir. \n**》 ${prefix}8ball** = Bazı basit sorulara basitçe cevap verir. \n**》 ${prefix}atasözü** = Rastgele atasözleri gönderir. \n**》 ${prefix}balıktut** = Rastgele cinsten balık tutar. \n**》 ${prefix}emojiyazı** = Harf emojileri ile yazdığınız yazıyı yazar. \n**》 ${prefix}fakemesaj** = Etiketlediğiniz kişiye istediğiniz mesajı göndertebilirsiniz. \n**》 ${prefix}banned** = Bence denememelisin! \n**》 ${prefix}çekiç** = İstediğin birine çekiç fırlatabilirsin. \n**》 ${prefix}çayaşekerat** = Çayın şekersiz mi? O zaman bu komutu kullan. \n**》 ${prefix}çayiç** = Bir yudum çay içmek istiyorsan bu komutu yazmalısın. \n**》 ${prefix}herkesebendençay** = Sunucudaki herkese çay ısmarla, gönüllerin efendisi ol! \n**》 ${prefix}sigara** = Sigara İçmek istiyorsan bu komutu kullanmalısınız. \n**》 ${prefix}nah-çek** = İstediğiniz Kişiye Nah Çekersiniz. \n**》 ${prefix}efkarölçer** = Efkarınızı Ölçer. \n**》 ${prefix}söv** = Etiketlediğiniz Bir Kişiye Söver.`)
      
    message.channel.sendEmbed(funnymenu);
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence', 'eglence'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'eğlence',
  description: 'eğlence',
  usage: 'eğlence'
  
};
