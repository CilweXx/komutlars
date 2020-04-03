const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ( message.react('🖤')) {
  message.channel.stopTyping();
  message.delete()

  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yazıyordurdur'],
    permLevel: 0,
}

exports.help = {
    name: 'yazıyordurdur',
    description: 'yazıyordurdur',
    usage: 'yazıyordurdur'
}