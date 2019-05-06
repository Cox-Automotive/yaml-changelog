import {Command, flags} from '@oclif/command';
import * as fs from 'fs';

const CHANGELOG_PATH = 'CHANGELOG.yaml';

export default class Init extends Command {
  static description = `Create an empty ${CHANGELOG_PATH}`;

  static flags = {
    help: flags.help({char: 'h'}),
  };

  async run() {
    if (fs.existsSync(CHANGELOG_PATH)) {
      this.log(`${CHANGELOG_PATH} already exists - no changes made`);
    } else {
      this.log(`Creating ${CHANGELOG_PATH}`);
      fs.open(`${CHANGELOG_PATH}`, 'w', (err) => {
        if (err) {
          this.log(`Error occurred while creating ${CHANGELOG_PATH}`, err);
        }
      });
    }
  }
}
