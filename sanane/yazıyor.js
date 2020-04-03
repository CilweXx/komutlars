const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ( message.react('🖤')) {
  message.channel.startTyping();
  message.delete()
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yazıyor'],
    permLevel: 0,
}

exports.help = {
    name: 'yazıyor',
    description: 'yazıyor',
    usage: 'yazıyor'
}