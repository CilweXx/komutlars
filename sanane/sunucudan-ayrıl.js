const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {
  
 let id = args[0]
  let reason = args.slice(1).join(' ')
let guildID = client.guilds.get(id)
 if (message.author.id != "466872033230454799") return message.channel.send('Bu Komutu sadece sahibim kullanabilir!');
 if (id.length < 1) return message.reply('Lütfen Sunucu ID`sini giriniz!');
  if (reason.length < 1) return message.reply('Lütfen Nedenini Belirtiniz!')
  if (!guildID) {
  const embed3 = new Discord.RichEmbed()
  .setTitle(':x: Böyle Bir sunucu bulunamadı!')
  .setColor('RED')
  .setTimestamp()
  return message.channel.send(embed3)
  }
      const embed = new Discord.RichEmbed()
  .setTitle('Elvis-Bot, ' + `"${guildID.name}"`   + ' adlı sunucunuzdan ayrıldı!')
  .addField('Sebep', reason)
  .setColor('RED')
  .setTimestamp()
guildID.owner.send(embed)
guildID.leave()
  
  const embed2 = new Discord.RichEmbed()
  .setTitle(':white_check_mark: Başarıyla "' + guildID.name + '" adlı Sunucudan ayrıldı!')
  .setColor('GREEN')
  .setTimestamp()
  message.channel.send(embed2)
          .then(g => console.log(`Sunucudan Ayrıldım ${g}`))
         .catch(console.error);
//  });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sc-ay'],
  permLevel: 0
};

exports.help = {
  name: "sunucudan-ayrıl",
  description: "sunucudan ayrıl",
  usage: "sunucudan ayrılır"
};