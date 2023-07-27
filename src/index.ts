import { Client, Events } from "discord.js";
import JishoAPI from "unofficial-jisho-api";

import { IntentOptions } from "./config/IntentOptions";
import { ExtendedClient } from "./interfaces/ExtendedClient";
import { loadCommands } from "./utils/loadCommands";
import { logHandler } from "./utils/logHandler";
import { registerCommands } from "./utils/registerCommands";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  const bot = new Client({ intents: IntentOptions }) as ExtendedClient;
  bot.env = validateEnv();
  bot.api = new JishoAPI();
  await loadCommands(bot);

  bot.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
      await interaction.deferReply();
      const target = bot.commands.find(
        (c) => c.data.name === interaction.commandName
      );
      target
        ? await target.run(bot, interaction)
        : await interaction.editReply({
            content: `Command ${interaction.commandName} not found!`,
          });
    }
  });

  bot.on(Events.ClientReady, async () => {
    await registerCommands(bot);
    logHandler.info("Client ready!");
  });

  await bot.login(bot.env.token);
})();
