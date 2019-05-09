import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import { safeLoad } from 'js-yaml';
import moment = require('moment');

import { Change, Changelog } from '../types';

export default class Render extends Command {
  static description = 'Renders a given changelog to markdown';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: 'Changelog file to render' }];

  async run() {
    const { args } = this.parse(Render);
    if (!args.file) {
      this.error('A json or yaml file must be provided to render');
      return -1;
    }

    const changelog: Changelog = safeLoad(fs.readFileSync(args.file, 'utf-8'));
    changelog.changes = changelog.changes.map((change: Change) => {
      return {
        ...change,
        timestamp: moment(change.timestamp).format('YYYY-MM-DD'),
        description: change.description.replace(/\n/g, '\\\n')
      };
    });
    const template = Handlebars.compile(fs.readFileSync('src/templates/changelog.tpl.md').toString());
    const md = template(changelog);
    this.log(md);
  }
}
