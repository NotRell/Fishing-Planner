const { 
    ApplicationCommandOptionType, 
    PermissionFlagsBits 
} = require("discord.js");

module.exports = {
  deleted: true,
  name: "ban",
  description: "Ban bocil maro!",
  // devOnly: true,
  // testOnly: true,
  options: [
    {
      name: "target-user",
      description: "member yang macro.",
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: "reason",
      description: "the reason",
      type: ApplicationCommandOptionType.String,
    },
  ],
  PermissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  callBack: (client, interaction) => {
    interaction.reply("ban..");
  },
};