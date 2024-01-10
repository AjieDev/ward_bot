
const { EmbedBuilder } = require('discord.js');
const pool = require('../pool.js');

module.exports = {
	name: "interactionCreate",

	async execute(interaction) {
	
        if(!interaction.isButton()) return;
            if(interaction.customId === 'rules') {
                logger.info('User agreed to the rules!');
                interaction.user.createDM().then(dm => {
                    dm.send("You have sucessfully agreed to rules.").catch(console.error);
                    const linkID = pool.createLink(interaction.user.id);

                    const captchaEmbed = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle('Hello! , Welcome to AjieDev Server Officials!')
                        .setDescription(`Use this Link to use Google reCaptcha verification method or use another method in verify channel. The link will expire in 24 hours. **You can ignore this you done verify on the server.** \nYour Verification Link: ${config.https ? 'https://' : 'http://'}${config.domain}/verify/${linkID}`)
                  
                  
                
                
                    dm.send({ embeds: [captchaEmbed] }).catch(() => {
                        logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
                    });
                })
            }
	},
};