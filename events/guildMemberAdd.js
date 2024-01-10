
// —— dot. 
const { Signale } = require('signale');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const logger = new Signale({ scope: 'Discord' });
const config = require('../config.js');
const pool = require('../pool.js');

module.exports = {
	name: "guildMemberAdd",

	async execute(member) {
        const domain = config.server.domain === 'localhost' ? `${config.server.domain}:${config.server.httpPort}` : `${config.server.domain}`; 
        if(config.Discord.rulesEnabled) {
            const linkID = pool.createLink(member.id);
            const captchaEmbed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Hello! , Welcome to AjieDev Server Officials!')
                .setDescription(`Use this Link to use Google reCaptcha verification method or use another method in verify channel. The link will expire in 24 hours. **You can ignore this you done verify on the server.** \nYour Verification Link: ${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)
          
            member.send({ embeds: [captchaEmbed] }).catch(() => {
                logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
            });    
                
        } else {
            const linkID = pool.createLink(member.id);
            const captchaEmbed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Hello! , Welcome to AjieDev Server Officials!')
                .setDescription(`Use this Link to use Google reCaptcha verification method or use another method in verify channel. The link will expire in 24 hours. **You can ignore this you done verify on the server.** \nYour Verification Link: ${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)
          

            member.send({ embeds: [captchaEmbed] }).catch(() => {
                logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
            });    
        }
        
	},
};
