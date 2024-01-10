module.exports = {
    server: {
        domain: "ajiedevserver.ajiedevco.repl.co",
        https: true,
        httpPort: 443,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        token: process.env.token, // —— Your bot's token.
        botId: "1139412216299393115", // —— The bot's ID.
        guildId: "993867537337024565", // —— The server ID on where the commands will be deployed.
        verifiedRole: "993867537395765371", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "server api",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: false,
        rules: "Type your rules here if rulesEnabled is enabled, ensure to use \n for new lines"
    },

    reCAPTCHA: {
        secretKey: process.env.rsecret,
        publicKey: process.env.pkey
    }
}
