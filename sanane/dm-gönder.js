const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
if (message.author.id != "466872033230454799") return message.reply(`Bu komutu sadece Sahibim **` + ayarlar.kodlayan + `** kullanabilir.`);
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Lütfen Göndereceğim Kişiye Yollayacağım Mesajı Yaz.');
  if (message.mentions.users.size < 1) return message.reply('Lütfen Kime Mesaj Atacam Onu Yaz.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesajın Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'dm-gönder',
  description: 'Bir kullanıcıya özel mesaj yollar.',
  usage: 'dm-gönder'
};