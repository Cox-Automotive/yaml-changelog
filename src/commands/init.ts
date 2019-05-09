import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import { safeDump } from 'js-yaml';

import { CHANGELOG_PATH } from '../constants';

export default class Init extends Command {
  static description = `Create an empty ${CHANGELOG_PATH}`;

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'service',
      description: 'Name of the service the changelog is being created in'
    }
  ];

  async run() {
    const { args } = this.parse(Init);
    if (!args.service) {
      this.error('A service name must be provided');
      return -1;
    }

    if (fs.existsSync(CHANGELOG_PATH)) {
      this.log(`${CHANGELOG_PATH} already exists - no changes made`);
    } else {
      this.log(`Creating ${CHANGELOG_PATH}`);
      fs.writeFileSync(`${CHANGELOG_PATH}`,
        safeDump(
          {
            service: args.service,
            changes: []
          },
          { lineWidth: 120 }
        ));
    }
  }
}
