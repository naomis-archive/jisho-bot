import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import { Command } from "../interfaces/Command";
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
      if (!result) {
        await interaction.editReply({
          content: "No results found!",
        });
      }
      const data = result.data[0];
      const embed = new EmbedBuilder();
      embed.setTitle(query);
      embed.setDescription(data.senses[0].english_definitions.join(", "));
      embed.addFields([
        {
          name: "Japanese",
          value: data.japanese[0].word || data.japanese[0].reading,
        },
      ]);
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
