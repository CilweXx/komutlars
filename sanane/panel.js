const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, member , params) => {
  
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  let prefix = await db.fetch(`prefix_${member.guild.id}`);
  let autoRol = await  db.fetch(`otorolisim_${member.guild.id}`);
  let autoRolKanal = await  db.fetch(`otorolKanal_${member.guild.id}`);
  let kufur = await db.fetch(`kufur_${member.guild.id}`);
  let reklam = await db.fetch(`reklam_${member.guild.id}`);

  if (sayac == null) sayac = '<:red:526108813258915840> Ayarlanmamış'
  if (skanal9 == null) skanal9 = '<:red:526108813258915840> Ayarlanmamış'
  if (autoRol == null) autoRol = '<:red:526108813258915840> Ayarlanmamış'
  if (autoRolKanal == null) autoRolKanal = '<:red:526108813258915840> Ayarlanmamış'
  if (kufur == null) kufur = '<:red:526108813258915840> Ayarlanmamış'
  if (reklam == null) reklam = '<:red:526108813258915840> Ayarlanmamış'
  if (prefix == null) prefix = '<:red:526108813258915840> Ayarlanmamış | Varsayılan: ?'
  
  const panel = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setTitle(`Elvis Panel`)
    .addField(`**》 Sayaç**`, `**》 ${sayac}**`, true)
    .addField(`**》 Sayaç Odası**`, `**》 ${skanal9}**`, true)
    .addField(`**》 Ön Ek**`, `**》 ${prefix}**`)
    .addField(`**》 OtoRol**`, `**》 <@${autoRol}>**`,true)
    .addField(`**》 OtoRol Kanalı**`, `**》 <#${autoRolKanal}>**`, true)
    .addField(`**》 Küfür Engeli**`, `**》 ${kufur}**`)
    .addField(`**》 Reklam Engeli**`, `**》 ${reklam}**`, true)
    .setFooter(`》 Bu komut **${member.author.tag}** tarafından istendi.`, `${member.author.avatarURL}`)
  
  member.channel.send(panel);
};

exports.conf = {
  
  enabled: true,
  guildOnly: true,
  aliases: ['panel'],
  permLevel: 0
  
};

exports.help = {
  
  name: 'panel',
  description: 'panel',
  usage: 'panel'
  
};
