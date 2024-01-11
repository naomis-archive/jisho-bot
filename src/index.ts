import { Client, Events } from "discord.js";
import JishoAPI from "unofficial-jisho-api";

import { IntentOptions } from "./config/IntentOptions";
import { ExtendedClient } from "./interfaces/ExtendedClient";
import { loadCommands } from "./utils/loadCommands";
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
    await bot.env.debugHook.send({
      content: "Bot authenticated!",
      username: bot.user?.username ?? "Jisho Bot",
      avatarURL:
        bot.user?.displayAvatarURL() ??
        "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png",
    });
  });

  await bot.login(bot.env.token);
})();
