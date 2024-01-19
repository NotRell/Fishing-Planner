const { devs, testServer } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");


module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(   
            (cmd) => cmd.name === interaction.commandName
        );

        if (!commandObject) return;

        if (commandObject.devOnly) {
            if (!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: "cuma developer yang bisa memakai command ini!!",
                    ephemeral: true,
                });
                return;
            }
        }

        if (commandObject.testOnly) {
          if (!(interaction.guild.id === testServer)) {
            interaction.reply({
              content: "this command cannot be ran here!!",
              ephemeral: true,
            });
            return;
          }
        }

        if (commandObject.permissionsRequired?.length) {
          for (const permission of commandObject.permissionsRequired) {
            if (!interaction.member.permissions.has(permission)) {
              interaction.reply({
                content: "you dont have a permissions",
                ephemeral: true,
              });
              return;
            }
          }
        }

        if (commandObject.botPermissions?.length) {
          for (const permission of commandObject.botPermissions) {
            const bot = interaction.guild.member.me;

            if (!bot.permissions.has(permission)) {
              interaction.reply({
                content: "you dont have the permissions!",
                ephemeral: true,
              });
              return;
            }
          }
        }

        await commandObject.callback(client, interaction);
    } catch (error) {
        console.log(`error di command: ${error}`);
    }
    if (interaction.isButton() && interaction.customId === "show_other_embed") {
      try {
      const otherEmbed = require("../../templateJson/emerald/infoTargetIkan.json");
      interaction.update({ embeds: [otherEmbed] });
    } catch (error) {
      console.error(`error loading other embed: ${error}`);
    }}
};
