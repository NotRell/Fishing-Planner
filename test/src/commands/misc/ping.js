module.exports = {
    name: "ping",
    description: "check your ping",
    // devOnly: true,
    // testOnly: true,
    // options: Object[],
    // deleted: Boolean,

    callback: (client, interaction) => {
        interaction.reply(`your ping is ${client.ws.ping}ms`);
    },
};