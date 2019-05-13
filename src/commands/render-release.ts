import { Command, flags } from '@oclif/command';
import { readFileSync } from 'fs';
import * as Handlebars from 'handlebars';
import { safeLoad } from 'js-yaml';

import { RELEASE_NOTES, RELEASES_PATH } from '../constants';
import { Release, ReleaseLog, ReleaseMd } from '../types';

export default class RenderRelease extends Command {
  static description = `Given a list of ${RELEASES_PATH} files, generates a single ${RELEASE_NOTES}`;
  static usage = 'render-release [FILE]...';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file', description: `${RELEASES_PATH} to render` }];
  static strict = false;

  async run() {
    const { argv } = this.parse(RenderRelease);
    if (!argv.length) {
      this.error('At least one file must be provided to render to markdown', { code: '-1' });
    }

    let releaseLogs: ReleaseLog[] = [];
    argv.forEach(p => {
      try {
        releaseLogs.push(safeLoad(readFileSync(p, 'utf-8')));
      } catch {
        this.error(`Unable to parse ${p} as YAML`, { exit: -1 });
      }
    });

    const groupById: ReleaseMd = releaseLogs.reduce((p: ReleaseMd, rlog: ReleaseLog) => {
      rlog.releases.forEach((r: Release) => {
        if (!p[r.id]) {
          p[r.id] = [];
        }
        p[r.id].push({ changes: r.changes.map(c => c.description), name: rlog.project });
      });
      return p;
    }, {});

    const template = Handlebars.compile(readFileSync('src/templates/release_notes.tpl.md').toString());
    const md = template(groupById);
    this.log(md);
  }
}