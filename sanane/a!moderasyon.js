const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix 
  
  if (!params[0]) {
    
    const modmenu = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`【 Elvis 】`)
      .setFooter(`》 Bu komut **${message.author.tag}** tarafından istendi.`, `${message.author.avatarURL}`)
      .addField(`》 Moderasyon Komutları`, `**》 ${prefix}temizle <0-100>** = Yazdığınız miktarda mesaj siler. \n**》 ${prefix}uyar @İsim <Sebep>** = Yaramazlık yapanları uyar! \n**》 ${prefix}kick @İsim <Sebep>** = Yaramazlık yapanlara son bir tolerans! \n**》 ${prefix}ban @İsim <Sebep>** = Yaramazlık yapanlara artık tolerans yok! \n**》 ${prefix}sustur @İsim <Sebep>** = Çok konuşan birini sustur. \n**》 ${prefix}konuştur @İsim <Sebep>** = Susturduğun bir kişiyi tekrardan konuştur. \n**》 ${prefix}sunucu-kur ** = Sunucunuza Hazır oda ve yetkiler kurar.`)
    
    message.channel.sendEmbed(modmenu);
    
  }
  
};

exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'moderasyon',
  description: 'moderasyon',
  usage: 'moderasyon'
  
};
