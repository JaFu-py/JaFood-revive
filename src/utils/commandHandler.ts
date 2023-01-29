import { Interaction } from "discord.js";

export default (interaction: any) => {
  switch (interaction.commandName) {
    case "ping":
      interaction.reply("Pong!");
      break;
  }
};
