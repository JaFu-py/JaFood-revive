import {
  Client,
  Collection,
  GatewayIntentBits,
  Events,
  Routes,
} from "discord.js";
import { SlashCommandBuilder } from "discord.js";
import config from "./config.json" assert { type: "json" };
import fs from "fs";
//------------------------//
export const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

//------------------------//
for (const file of fs.readdirSync("./events")) {
  import(`./events/${file}`);
}

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand())
    await import("./utils/commandHandler.js").then((m) =>
      m.default(interaction)
    );
  if (
    interaction.isButton() ||
    interaction.isStringSelectMenu() ||
    interaction.isModalSubmit()
  )
    await import("./utils/interactionHandler.js").then((m) =>
      m.default(interaction)
    );
});
client.on("ready", () => {
  // @ts-ignore
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(config.bot.token);
