const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {

let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;

    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<:red:526108813258915840>"

    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:red:526108813258915840>"

    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<:red:526108813258915840>"

    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<:red:526108813258915840>"

    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:red:526108813258915840>"

    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<:red:526108813258915840>"

    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<:red:526108813258915840>"

    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<:red:526108813258915840>"

    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<:red:526108813258915840>"

    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<:red:526108813258915840>"

    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:onay:526108812856262657>"
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:red:526108813258915840>"

    msg.channel.send(stripIndents`
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet

   `)
  msg.channel.send("")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};