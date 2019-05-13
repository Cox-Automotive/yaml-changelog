import { Command, flags } from '@oclif/command';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { safeDump, safeLoad } from 'js-yaml';
import moment = require('moment');

import { CHANGELOG_PATH, RELEASES_PATH } from '../constants';
import { Change, Changelog, ReleaseLog } from '../types';

export default class Release extends Command {
  static description = `Regenerates ${RELEASES_PATH} with changes from ${CHANGELOG_PATH}`;

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'date', description: 'A date in ISO 8601 format' }];

  async run() {
    const { args } = this.parse(Release);
    if (!args.date) {
      this.error('A date must be provided to filter from');
      return -1;
    }

    const date = moment(args.date, moment.ISO_8601);
    if (!date.isValid()) {
      this.error(`Unable to parse ${args.date}. Please provide an ISO 8601 formatted date`);
      return -1;
    }

    if (!existsSync(CHANGELOG_PATH)) {
      this.error(`Unable to generate ${RELEASES_PATH} if ${CHANGELOG_PATH} does not exist`);
      return -1;
    }

    const changelog: Changelog = safeLoad(readFileSync(CHANGELOG_PATH, 'utf-8'));
    const releaselog: ReleaseLog = existsSync(RELEASES_PATH) ?
      safeLoad(readFileSync(RELEASES_PATH, 'utf-8')) :
      { project: changelog.project, releases: [] };

    const released: Change[] = releaselog.releases.map(r => r.changes).reduce((x, y) => x.concat(y), []);
    const unreleased = changelog.changes.filter(c => !released.some(r => c.timestamp === r.timestamp));

    if (unreleased.length) {
      releaselog.releases.unshift({
        id: date.format('YYYY-MM-DD HH:mm:ss'),
        changes: unreleased
      });
      writeFileSync(RELEASES_PATH, safeDump(releaselog, { lineWidth: 120 }));
      this.log('Release written');
    } else {
      this.log('No new changes detected');
    }
  }
}
