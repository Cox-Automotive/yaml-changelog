import { Command, flags } from '@oclif/command';

export default class Release extends Command {
  static description = 'describe the command here';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Release);
  }
}
