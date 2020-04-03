const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   
  let isEnabled;
  message.channel.send(`<:onay:526108812856262657> Birazdan yetkili ekibimiz sizinle ilgilenecektir.`);
  let chan = message.channel;
  let destekKanal = "533344819716816926";
  const embed = new Discord.RichEmbed()
      .addField('Dikkat', `Canlı Destek Talebi`)
      .setDescription(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setColor("FFFFFF")
      .addField(`Bilgiler`, `Sunucu: ${message.guild.name} \n Kanal: ${message.channel.name} \n Destek İsteyen: ${message.author.tag}`)
      .setFooter("Elvis | Canlı Destek Sistemi")
  client.channels.get(destekKanal).send(embed);
  const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
    time: 0
  })
  client.channels.get(destekKanal).send(`Destek çağrısına bağlanmak için \`bağlan\`, iptal etmek için \`iptal\` yazınız.`)
  collector.on('message', (message) => {
    if (message.content === 'iptal') collector.stop('aborted')
    if (message.content === 'bağlan') collector.stop('success')
  })
  collector.on('end', (collected, reason) => {
    if (reason === 'time') return message.channel.send(`<:red:526108813258915840> Canlı destek talebiniz zaman aşımına uğradı.`)
    if (reason === 'aborted') {
      message.channel.send(`<:red:526108813258915840> Canlı destek talebiniz yetkili tarafından reddedildi.`)
      client.channels.get(destekKanal).send(`<:red:526108813258915840> Canlı destek talebi reddedildi.`)
    }
    if (reason === 'success') {
      client.channels.get(destekKanal).send(`<:onay:526108812856262657> Canlı destek talebi kabul edildi. İptal etmek için \`iptal\` yazınız.`)
      chan.send(`<:onay:526108812856262657> ${message.author}, canlı destek talebiniz yetkili tarafından kabul edildi. İptal etmek için \`iptal\` yazınız.`)
      isEnabled = true
      client.on('message', message => {
        function contact() {
          if (isEnabled === false) return
          if (message.author.id === client.user.id) return
          if (message.content.startsWith('iptal')) {
            message.channel.send(`<:red:526108813258915840> Canlı destek talebini iptal ettiniz.`)
            if (message.channel.id === chan.id)
              client.channels.get(destekKanal).send(`<:red:526108813258915840> Canlı destek talebi kullanıcı tarafından iptal edildi.`)
            if (message.channel.id === destekKanal) 
              chan.send(`<:red:526108813258915840>   Canlı destek talebiniz yetkili tarafından iptal edildi.`)
            return isEnabled = false
          }
          if (message.channel.id === chan.id) 
            client.channels.get(destekKanal).send(`Talepte Bulunan Kişi ${message.author.tag} : ${message.content}`)
          if (message.channel.id === destekKanal) 
            chan.send(`Yetkili ${message.author.tag} : ${message.content}`)
        }
        contact(client)
      })
    }
  })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Oluşturur.',
  usage: 'canlıdestek'
};