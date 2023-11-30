const Discord = require('discord.js')

const client = new Discord.Client()

const prefix = '!'

client.once('ready', () =>{
    console.log("Mute Bot Online")
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return


    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()


    if(command === 'mute-all')
    if (message.member.voice.channel) {
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
          // if (member != message.member)
      
          member.voice.setMute(true);
        }
        message.channel.send("muted everyone")
      } else {
        message.reply('You need to join a voice channel first!');
      }



    if(command === 'unmute-all')
    if (message.member.voice.channel) {
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
            // if (member != message.member)
        
            member.voice.setMute(false);
        }
        message.channel.send("unmuted everyone")
        } else {
          message.reply('You need to join a voice channel first!');
        }
})


client.login('Replace with your token')
