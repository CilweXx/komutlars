const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  if (args[0] == "client.token") return;
if (message.author.id != "466872033230454799")
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**`SUNUCUYU_YÖNET` yetkin yok!**')
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/glog.json", "utf8"));
    	let otorolkapat = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/glog.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`<:hayir:523940654527545355> Hoşgeldin Sistemi Ayarlamadığın İçin Sıfırlayamazsın!`)
				.setColor("FFFFFF")
				.setTimestamp('Ayarlamak İçin a!hoşgeldin-ayarla @rol')
			message.channel.send({embed})
			return
		}
		delete sunucuyaözelayarlarOtorol[message.guild.id]
		fs.writeFile("./sunucuyaözelayarlar/glog.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`<:evet:523940654301315082> Hoşgeldin Sistemi Başarıyla Sıfırlandı`)
			.setColor("FFFFFF")
			.setTimestamp()
    	.setTimestamp('Ayarlamak İçin m!hoşgeldin-ayarla @rol')
		message.channel.send({embed})
		return
	}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hoşgeldin-kapat', 
  description: 'Slots oyunu oynar',
  usage: 'otorolkapat'
};