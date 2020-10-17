const Discord = require('discord.js');
const client = new Discord.Client();
const regexpURL = RegExp('^(https?):\/\/[^\s$.?#].[^\s]*$','g');
const extentions = ['.zip', '.rar', '.7z', '.psd', '.afphoto', '.xcf', '.afdesign', 'drive.google']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.channel.id === '766312424911011861')
    {
        const urls = message.content.matchAll(regexpURL);
        for (const url of urls) {
           if(extensions.some(e => url.includes(e)))
           {
              const target_channel = bot.channels.get('766362124444106773');
              await target_channel.send(message.content);
           }
        }
    } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret


