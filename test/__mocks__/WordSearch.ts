import { JishoResult } from "unofficial-jisho-api";

export const MockSingleWordSearch: [JishoResult] = [
  {
    slug: "お願いします",
    is_common: true,
    tags: ["wanikani13"],
    jlpt: ["jlpt-n2", "jlpt-n1"],
    japanese: [
      {
        word: "お願いします",
        reading: "おねがいします",
      },
      {
        word: "御願いします",
        reading: "おねがいします",
      },
    ],
    senses: [
      {
        english_definitions: ["please"],
        parts_of_speech: ["Expressions (phrases, clauses, etc.)"],
        links: [],
        tags: ["Humble (kenjougo) language"],
        restrictions: [],
        see_also: [],
        antonyms: [],
        source: [],
        info: [],
      },
    ],
    attribution: {
      jmdict: true,
      jmnedict: false,
      dbpedia: false,
    },
  },
];

export const ExpectedSingleWordSearch = `**お願いします | おねがいします | 御願いします**
__Expressions (phrases, clauses, etc.)__
please`;

export const MockWordSearch: [JishoResult, JishoResult, JishoResult] = [
  {
    slug: "お願いします",
    is_common: true,
    tags: ["wanikani13"],
    jlpt: ["jlpt-n2", "jlpt-n1"],
    japanese: [
      {
        word: "お願いします",
        reading: "おねがいします",
      },
      {
        word: "御願いします",
        reading: "おねがいします",
      },
    ],
    senses: [
      {
        english_definitions: ["please"],
        parts_of_speech: ["Expressions (phrases, clauses, etc.)"],
        links: [],
        tags: ["Humble (kenjougo) language"],
        restrictions: [],
        see_also: [],
        antonyms: [],
        source: [],
        info: [],
      },
    ],
    attribution: {
      jmdict: true,
      jmnedict: false,
      dbpedia: false,
    },
  },
  {
    slug: "何卒",
    is_common: true,
    tags: [],
    jlpt: ["jlpt-n1"],
    japanese: [
      {
        word: "何卒",
        reading: "なにとぞ",
      },
      {
        word: "何とぞ",
        reading: "なにとぞ",
      },
      {
        word: "何卒",
        reading: "なにそつ",
      },
    ],
    senses: [
      {
        english_definitions: [
          "please",
          "kindly",
          "I beg of you",
          "if it pleases you",
        ],
        parts_of_speech: ["Adverb (fukushi)"],
        links: [],
        tags: ["Humble (kenjougo) language"],
        restrictions: [],
        see_also: ["どうぞ"],
        antonyms: [],
        source: [],
        info: [],
      },
      {
        english_definitions: ["by all means", "without fail"],
        parts_of_speech: ["Adverb (fukushi)"],
        links: [],
        tags: [],
        restrictions: [],
        see_also: ["どうぞ"],
        antonyms: [],
        source: [],
        info: [],
      },
    ],
    attribution: {
      jmdict: true,
      jmnedict: false,
      dbpedia: false,
    },
  },
  {
    slug: "下さい",
    is_common: true,
    tags: ["wanikani1"],
    jlpt: ["jlpt-n5"],
    japanese: [
      {
        word: "下さい",
        reading: "ください",
      },
    ],
    senses: [
      {
        english_definitions: ["please (give me)"],
        parts_of_speech: ["Expressions (phrases, clauses, etc.)"],
        links: [],
        tags: [
          "Usually written using kana alone",
          "Honorific or respectful (sonkeigo) language",
        ],
        restrictions: [],
        see_also: [],
        antonyms: [],
        source: [],
        info: [],
      },
      {
        english_definitions: ["please (do for me)"],
        parts_of_speech: ["Expressions (phrases, clauses, etc.)"],
        links: [],
        tags: [
          "Usually written using kana alone",
          "Honorific or respectful (sonkeigo) language",
        ],
        restrictions: [],
        see_also: [],
        antonyms: [],
        source: [],
        info: ["after te-form of a verb or a noun prefixed with o- or go-"],
      },
    ],
    attribution: {
      jmdict: true,
      jmnedict: false,
      dbpedia: false,
    },
  },
];

export const ExpectedWordSearch = `**お願いします | おねがいします | 御願いします**
__Expressions (phrases, clauses, etc.)__
please

**何卒 | なにとぞ | 何とぞ | なにそつ**
__Adverb (fukushi)__
please, kindly, I beg of you, if it pleases you

__Adverb (fukushi)__
by all means, without fail

**下さい | ください**
__Expressions (phrases, clauses, etc.)__
please (give me)

__Expressions (phrases, clauses, etc.)__
please (do for me)`;
