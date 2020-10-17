const Discord = require('discord.js');
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
           const contains_resources = false;
            
          extensions.forEach(function(e){
            console.log(url.match(/\.(zip|rar|7z|psd|afphoto|xcf|afdesign)/g) != null);
            if(url.indexOf(e) > -1){
              contains_resources = true
              console.log(`Match using: ${url} and ${e}`);
            }
            else
            {
              console.log(`No match using: ${url} and ${e}`);
            }
          });
          
           if(contains_resources)
           {
              const target_channel = bot.channels.get('766362124444106773');
              await target_channel.send(message.content);
           }
        }
    } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret


