const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith("!" + str);
}

client.on('ready', () => {
  console.log('The bot is online!');
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/);
  if(commandIs("hello", message)){
        message.channel.sendMessage('Hello there, ' + message.author.username);
   }
   if(commandIs("youtube", message)){
     if(args.length === 1){
       message.channel.sendMessage('You did not define an argument. Usage: `!youtube [episode number]`');
     } else if (args.length === 2){
       message.channel.sendMessage('Hello Youtube, this is episode ' + args[1]);
     } else {
       message.channel.sendMessage('You defined too many arguments. Usage: `!youtube [episode number]`');
     }
   }
   if(commandIs("say", message)){
     if(args.length === 1){
       message.channel.sendMessage('You did not define an argument. Usage: `!say [Message to say]`');
     } else {
       message.channel.sendMessage(args.join(" ").substring(5));
     }
   }
});

client.login('MzA0NDMxODQ0MTczMDIxMTg0.C9mjzA.ducn_qzx8zgMmcRHXISWQuwSBOM');