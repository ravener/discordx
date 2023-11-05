import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class CommandA {
  @Slash({ description: "hello" })
  hello(interaction: CommandInteraction): void {
    interaction.reply(":wave:");
  }
}
