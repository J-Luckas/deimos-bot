import { Client } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
    intents: 641,
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    
	console.log(`I'm ready as ${client.user.tag}!`);
});

client.on('messageCreate', ( message ) => {
    const { voice } = message.member;
    
    if(message.author.bot) return;

    if ( voice.channel && message.channelId !== '888059487708131338' ){ 
        setTimeout(() => {
            voice.channel.members.forEach(member => {
                if(member.user.bot && member.user.username.includes('Chip') || member.user.username.includes('Jockie') || member.user.username.includes('Music')){
                    message.reply(`@${message.author.username} peça música apenas no canal #pedir-musica!`);
                    member.voice.disconnect();
                    message.reply(`@${member.user.username} se retirando...`);                    
                }
            });
        }, 3000);
    }
});

client.login(process.env.TOKEN);