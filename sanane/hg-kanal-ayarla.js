const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/glog.json", "utf8"));

exports.run = async (client, message, args) => {
if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send('<:hayir:523940654527545355> | Kullanım: `a!hoşgeldin-ayarla #kanal`')
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("././sunucuyaözelayarlar/glog.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    message.channel.send(`<:evet:523940654301315082> | Hoşgeldin kanalı ${channel} olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoşgeldin-ayarla'],
    permLevel: 0
}

exports.help = {
    name: 'hosgeldin-ayarla',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}