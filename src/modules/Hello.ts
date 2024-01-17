import { Extension, applicationCommand, listener } from '@pikokr/command.ts'
import { ApplicationCommandType, ChatInputCommandInteraction } from 'discord.js'

class InfomationExtension extends Extension {
  @listener({ event: 'ready' })
  async ready() {
    this.logger.info(`Logged in as ${this.client.user?.tag}`)
    await this.commandClient.fetchOwners()
  }

  @listener({ event: 'applicationCommandInvokeError', emitter: 'cts' })
  async errorHandler(err: Error) {
    this.logger.error(err)
  }

  @applicationCommand({
    name: '안녕',
    type: ApplicationCommandType.ChatInput,
    description: '반갑게 인사하기!',
  })
  async hello(i: ChatInputCommandInteraction) {
    await i.reply("반가워요!")
  }
}

export const setup = async () => {
  return new InfomationExtension()
}
