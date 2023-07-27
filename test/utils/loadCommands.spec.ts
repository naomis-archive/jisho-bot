import { readdir } from "fs/promises";
import { join } from "path";

import { assert } from "chai";

import { Command } from "../../src/interfaces/Command";
import { ExtendedClient } from "../../src/interfaces/ExtendedClient";
import { loadCommands } from "../../src/utils/loadCommands";

suite("loadCommands util", () => {
  test("loads the expected files", async () => {
    const result: { commands: Command[] } = { commands: [] };
    await loadCommands(result as ExtendedClient);
    const fileList = await readdir(
      join(process.cwd(), "prod", "commands"),
      "utf-8"
    );
    assert.equal(result.commands.length, fileList.length);
    for (const file of fileList) {
      const name = file.split(".")[0];
      assert.exists(
        result.commands.find((c) => c.data.name === name),
        `${name} command was not loaded.`
      );
    }
  });
});
