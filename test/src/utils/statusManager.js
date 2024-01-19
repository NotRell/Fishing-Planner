const { ActivityType } = require("discord.js");

const status = [
  {
    name: "someone jealous",
    type: ActivityType.Watching,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "someone spying",
    type: ActivityType.Listening,
    url: "https://discord.gg/PfVUmg3vzX",
  },
  {
    name: "someone envy",
    type: ActivityType.Watching,
  },
  {
    name: "this bot",
    type: ActivityType.Listening,
  },
  {
    name: "this bot still in progress",
    type: ActivityType.Watching,
  },
];

function setStatus(client) {
  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);

    client.user.setStatus("idle");
  }, 5000);
}

module.exports = setStatus;
