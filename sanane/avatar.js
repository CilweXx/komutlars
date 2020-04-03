const Discord = require('discord.js');

exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor(0x36393f)
  .setImage(mention.avatarURL)
  .addField('Elvis | Avatar Sistemi', `[Avatarın Büyük Halini Göster!](${mention.avatarURL})`, false);
  message.react("💙");
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor(0x36393f)
  .setImage(message.author.avatarURL)
  .addField('Elvis | Avatar Sistemi', `[Avatarın Büyük Halini Göster!](${message.author.avatarURL})`, false);
  message.channel.sendEmbed(avatarEmbedYou);
  return;
}
message.channel.sendMessage("An error occured!");
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatar.',
  usage: 'avatar'
};