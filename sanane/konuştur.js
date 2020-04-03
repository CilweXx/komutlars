const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFFFFFF)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`konuştur` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('`log` **kanalını bulamıyorum.**').catch(console.error);
  if (!muteRole) return message.reply('`Muted` **adlı bir rol bulamıyorum.**').catch(console.error);
  if (reason.length < 1) return message.reply(' **Konuşturma sebebini Yazmadın!** ').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply(' **Kimi konuşturacağını belirtmedin!** ').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .addField('Eylem:', 'Konuşturma :bangbang: ')
    .addField('Konuşturulan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Konuşturan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Konuşturma Sebebi', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'konuştur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'konuştur [kullanıcı] [sebep]'
};
