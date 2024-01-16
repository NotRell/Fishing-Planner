require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
    console.log(`${c.user.tag} is online`);

client.user.setActivity({
    name: "someone claiming a copyright",
    type: ActivityType.Watching,
})
});

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === "bang") {
        message.reply("bang");        
    }
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "hey") {
        interaction.reply({
            content: "halo",
            ephemeral: true
        });
    }
});

client.login(process.env.TOKEN);
