const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async (client, msg, message, args) => {
   
 
  if (!msg.member.hasPermission ("ADMINISTRATOR")) return msg.reply(`Bu Komutu Kullanmak İçin Yönetici İznine Sahip Olmalısın!`);

    
  let discorol = await db.fetch(`discorol_${msg.guild.id}`);
   setInterval(() => {
  msg.guild.roles.find('name', discorol).setColor("RANDOM");
   }, 1000);
msg.channel.send(`Disco Başladı!`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'disco-başlat',
    description: 'Disco Başlatır',
    usage: 'disco-baslat'
}