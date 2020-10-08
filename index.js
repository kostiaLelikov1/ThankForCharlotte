const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot started');
});

client.on('message', message => {
    if (message.content.toLowerCase().includes('lawrence')) {
        message.reply(`${message.author.username}, thank you for Charlotte <3`);
    }
})

client.login(process.env.BOT_TOKEN)