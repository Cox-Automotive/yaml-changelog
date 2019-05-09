import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import { safeLoad } from 'js-yaml';
import moment = require('moment');

import { CHANGELOG_PATH } from '../constants';
import { Changelog } from '../types';

export default class Filter extends Command {
  static description = 'Dislays all entries in the changelog after the provided date';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'date', description: 'A date in ISO 8601 format' }];

  async run() {
    const { args } = this.parse(Filter);
    if (!args.date) {
      this.error('A date must be provided to filter from');
      return -1;
    }

    try {
      const filterDate = moment(args.date, moment.ISO_8601);
      const changelog: Changelog = safeLoad(fs.readFileSync(CHANGELOG_PATH, 'utf-8'));
      const filteredLog: Changelog = {
        ...changelog,
        changes: changelog.changes.filter(change => moment(change.timestamp).isAfter(filterDate))
      };
      this.log(JSON.stringify(filteredLog, null, 2));
    } catch {
      this.error(`Unable to parse ${args.date}. Please provide an ISO 8601 formatted date`);
      return -1;
    }
  }
}
