const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let kanal1 = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
	if (kanal.length, kanal1.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  
  message.guild.createChannel(kanal1 , 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
 message.guild.createChannel(kanal , 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
 }])   
  .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === kanal1)));
  message.guild.createChannel(kanal , 'voice')
  .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === kanal1)));


  message.channel.send("Özel Odanız Oluşturuldu");

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'özeloda',
  description: 'Bir kanal açar',
  usage: 'kanal-aç [açmak istediğiniz kanalın adı]'
};