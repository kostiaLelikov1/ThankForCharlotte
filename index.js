const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot started');
});

client.on('message', message => {
    if (message.content.toLowerCase().includes('lawrence')) {
        message.reply(`thank you for Charlotte <3`);
    }
    if (message.content.toLowerCase() === 'charlotte') {
        message.channel.send('/play charlotte lawrence slow motion')
    }
})

client.login(process.env.BOT_TOKEN)