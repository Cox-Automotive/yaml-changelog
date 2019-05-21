import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import { safeDump } from 'js-yaml';

import { CHANGELOG_PATH } from '../constants';
import { Changelog } from '../types';

export default class Init extends Command {
  static description = `Create an empty ${CHANGELOG_PATH}`;

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'project',
      description: 'Name of the project the changelog is being created in'
    }
  ];

  async run() {
    const { args } = this.parse(Init);
    if (!args.project) {
      this.error('A project name must be provided');
      return -1;
    }

    if (fs.existsSync(CHANGELOG_PATH)) {
      this.log(`${CHANGELOG_PATH} already exists - no changes made`);
    } else {
      this.log(`Creating ${CHANGELOG_PATH}`);
      const initialChangelog: Changelog = {
        project: args.project,
        changes: [],
      };
      fs.writeFileSync(`${CHANGELOG_PATH}`,
        safeDump(
          initialChangelog,
          { lineWidth: 120 }
        ));
    }
  }
}
