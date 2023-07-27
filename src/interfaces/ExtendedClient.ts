import { Client, WebhookClient } from "discord.js";
import JishoAPI from "unofficial-jisho-api";

import { Command } from "./Command";

export interface ExtendedClient extends Client {
  env: {
    token: string;
    homeGuild: string;
    debugHook: WebhookClient;
  };
  api: JishoAPI;
  commands: Command[];
}
