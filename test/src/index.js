require("dotenv").config();
const { Client, IntentsBitField, ActivityType, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: "someone claiming a copyright",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "minimal bikin sendiri",
    type: ActivityType.Custom,
  },
  {
    name: "minimal gak plagiat",
    type: ActivityType.Custom,
  },
];

client.on("ready", (c) => {
    console.log(`${c.user.tag} is online`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 5000);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content === "bang mau nanya") {
        return; 
        message.reply("ada yang nanya nih <@&>");
         }     
    
    if (message.content !== "emerald") return;
    
    const firstButton = new ButtonBuilder()
        .setLabel("First Button")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("first-button")

    const secondButton = new ButtonBuilder()
        .setLabel("Second Button")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("second-button")

        const buttonRow = new ActionRowBuilder().addComponents(firstButton, secondButton);

        const reply = await message.channel.send({ content: "choose a button...", components: [buttonRow] });

        const filter = (i) => i.user.id === message.author.id;

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter,
        });

        collector.on("collect", (interaction) => {
            if (interaction.customId === "first-button") {
                interaction.reply({content: "You clicked on the first button.", ephemeral: true});
                return;
            }

            if (interaction.customId === "second-button") {
                interaction.reply({content: "You clicked on the second button.", ephemeral: true});
                return;
            }
        })
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "hey") {
        interaction.reply({
            content: "halo",
            ephemeral: true
        }   );
    }
});

client.login(process.env.TOKEN);
