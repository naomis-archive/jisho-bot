import { JishoResult } from "unofficial-jisho-api";

const createJapaneseSet = (japanese: JishoResult["japanese"]): string => {
  const set = new Set<string>();
  for (const j of japanese) {
    if (j.word && !set.has(j.word)) {
      set.add(j.word);
    }
    if (j.reading && !set.has(j.reading)) {
      set.add(j.reading);
    }
  }
  return [...set].join("\n");
};

/**
 * Parses the Jisho word search result into a nice string.
 *
 * @param {JishoResult[]} data The data from Jisho.
 * @returns {string} A formatted string.
 */
export const parseWordData = (data: JishoResult[]): string => {
  return (
    data.map((datum) => createJapaneseSet(datum.japanese)).join("\n") +
    "\n" +
    data
      .map(
        (datum) =>
          `${datum.senses
            .map(
              (sense) =>
                `_${sense.parts_of_speech.join(
                  ", "
                )}_\n${sense.english_definitions.join(", ")}`
            )
            .join("\n")}`
      )
      .join("\n")
  );
};
