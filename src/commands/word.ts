import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
import { parseWordData } from "../modules/parseWordData";
import { errorHandler } from "../utils/errorHandler";

export const word: Command = {
  data: new SlashCommandBuilder()
    .setName("word")
    .setDescription("Search for a word or phrase in Japanese or English!")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("The word or phrase to search for.")
        .setRequired(true)
    )
    .setDMPermission(false),
  run: async (bot, interaction) => {
    try {
      const query = interaction.options.getString("query", true);
      const result = await bot.api.searchForPhrase(query);
      if (!result || !result.data.length) {
        await interaction.editReply({
          content: "No results found!",
        });
        return;
      }
      const embed = new EmbedBuilder();
      embed.setTitle(query);
      embed.setDescription(parseWordData(result.data.slice(0, 3)));
      embed.setFooter({
        text: "Powered by Jisho.org",
      });
      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      await errorHandler(bot, "word command", err);
      await interaction.editReply({
        content: "An error occurred while searching for that word or phrase!",
      });
    }
  },
};
