exports.run = (client, message, args) => {
    message.channel.send("Ahhh. Yakıyorum.").then(async message => {
                    setTimeout(() => {
            message.channel.send('');
        }, 1000);
          setTimeout(() => {
            message.react(' ☁ ');
        }, 1500);
          setTimeout(() => {
            message.react(' ☁ ');
        }, 1500);
        setTimeout(() => {
            message.edit('☁☁');
        }, 1800);
        setTimeout(() => {
            message.edit(' ☁ ');
        }, 2300);
        setTimeout(() => {
            message.edit(' ☁☁ ');
        }, 2800);
        setTimeout(() => {
            message.edit(' ☁☁☁ ');
        }, 3300);
        setTimeout(() => {
            message.edit(' ☁☁');
        }, 3800);
        setTimeout(() => {
            message.edit(' ☁');
        }, 4300);
        setTimeout(() => {
            message.edit(' ');
        }, 4800);
    setTimeout(() => {
            message.edit('**Sigara bitti**| Sigara İçmeyiniz. :no_smoking: Sigara Sağlığa Zararlıdır');
        }, 5300);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara içersiniz.',
  usage: 'sigara'
};