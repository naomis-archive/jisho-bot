import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const kanji: Command = {
  data: new SlashCommandBuilder()
    .setName("kanji")
    .setDescription("Get information on a specific kanji character.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("The character to search for.")
        .setRequired(true)
    )
    .setDMPermission(false),
  run: async (bot, interaction) => {
    try {
      const query = interaction.options.getString("query", true);
      const result = await bot.api.searchForKanji(query);
      if (!result.found) {
        await interaction.editReply({
          content: "No results found!",
        });
        return;
      }
      const embed = new EmbedBuilder();
      embed.setTitle(query);
      embed.setDescription(result.meaning);
      embed.setImage(result.strokeOrderGifUri);

      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler(bot, "word command", err);
      await interaction.editReply({
        content: "An error occurred while searching for that word or phrase!",
      });
    }
  },
};
