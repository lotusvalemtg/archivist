const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client();
const regexpURL = RegExp('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+','g');
//'^(https?):\/\/[^\s$.?#].[^\s]*$'
const extensions = [".zip", ".rar", ".7z", ".psd", ".afphoto", ".xcf", ".afdesign", "drive.google"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.channel.id === '766312424911011861')
    {
        console.log(`Message added to general`);
        const urls = message.content.matchAll(regexpURL);
        for (const url of urls) {
           console.log(`URL found ${url}`);
           console.log("Searching for extensions: " + extensions.join(","));          
          
           if((/\.(zip|rar|7z|psd|afphoto|xcf|afdesign)|(drive.google)/g).test(url))
           {
             console.log(`Resource found in ${url}`);
             console.log('Adding resource to templates')
             //Get templates channel
             let targetChannel = client.channels.cache.get('766362124444106773');
             if (targetChannel){ 
                targetChannel.send(`${message.author} - ${url}`)
                    .then((sentmsg) => {
                        const receivedEmbed = sentmsg.embeds[0];
                        sentmsg.edit(`${message.author} - [${receivedEmbed.title}] \n <${url}>`);
                    });
             }
           }
           else
          {
            console.log(`No match using: ${url}`);
          }
        }
    } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

