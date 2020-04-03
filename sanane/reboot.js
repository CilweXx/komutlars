const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id === '466872033230454799') {
    if (message.author.id === '466872033230454799') {
      message.delete(1),
      message.channel.sendMessage(`***İşlem başarılı. Bot başarıyla yeniden başlatıldı! ./|/|_-___***`).then(msg => {
        process.exit(42);
      });
    } else {
      message.channel.sendMessage(`\`${message.author.username}\`  **Sen benim yapımcım değilsin :no_entry:**`);
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};