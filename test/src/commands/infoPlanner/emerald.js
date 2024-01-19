const { MessageActionRow, MessageButton } = require("discord.js");
const emeraldEmbed = require("../../templateJson/emerald/emerald.json");
const infoTargetIkanEmbed = require("../../templateJson/emerald/infoTargetIkan.json");
const setUpEmbed = require("../../templateJson/emerald/setUp.json");
const spotMancingEmbed = require("../../templateJson/emerald/spotMancing.json");

module.exports = {
  name: "emerald",
  description: "set up emerald embed di channel ini",
  callback: (client, interaction) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("show_info_target_ikan")
        .setLabel("Info Target Ikan")
        .setStyle("PRIMARY"),
      new MessageButton()
        .setCustomId("show_set_up")
        .setLabel("Set Up")
        .setStyle("PRIMARY"),
      new MessageButton()
        .setCustomId("show_spot_mancing")
        .setLabel("Spot Mancing")
        .setStyle("PRIMARY")
    );

    let embed;
    switch (interaction.customId) {
      case "show_info_target_ikan":
        embed = infoTargetIkanEmbed;
        break;
      case "show_set_up":
        embed = setUpEmbed;
        break;
      case "show_spot_mancing":
        embed = spotMancingEmbed;
        break;
      default:
        embed = emeraldEmbed;
    }

    interaction.reply({ embeds: [embed], components: [row] });
  },
};
