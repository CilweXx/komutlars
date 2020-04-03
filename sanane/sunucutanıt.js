const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
exports.run = async (client, message, args) => {
  	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`a!sunucutanıt` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.RichEmbed()
  .setTitle('BAŞARILI')
.setDescription('Sunucunuz Başarıyla [Destek Sunucusunda Yani Burada Tanıtıldı](https://discord.gg/3z64aqE).\n12 saat Sonra sunucunuzu Tekrardan Tanıtabilirsiniz.')
        .setColor('GREEN')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()
        .addField(`Elvis`,`***Sende beni sunucuna ekleyip bu özelliği kullanabilirsin.***`)
            .addField(`:arrow_double_down: Sunucu Sahibi`, message.author.tag)
            .addField(`:arrow_double_down: Sunucu İsmi`, message.guild.name)
      .addField(`:arrow_double_down: Sunucudaki Üye Sayısı`, message.guild.members.size)
      .addField(`:arrow_double_down: Sunucu Davet Linki`, invite.url)
            .setColor('FFFFFF')
      .setThumbnail(message.guild.iconURL)
       client.channels.get('533299438983315458').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
    const no = new Discord.RichEmbed()
    .setTitle('Sunucu Tanıt')
    .setDescription('Bu Komut Bu Sunucuda 12 Saat İçinde 1 Kere Kullanılmış')
    .addField('Linkler', '[Destek Sunucusu](https://discord.gg/3z64aqE)\n[Beni Sunucuna Eklemek İçin Lütfen Tıkla](https://discordapp.com/oauth2/authorize?client_id=528885635985965058&scope=bot&permissions=2146958847)')
    .setThumbnail(client.user.avatarURL)
    .setColor('RED')
  message.channel.send(no);
  }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucutanıt'],
    permLevel: 0,
}

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunuzunuzu Tanıtabilirsiniz',
    usage: 'sunucutanıt'
}