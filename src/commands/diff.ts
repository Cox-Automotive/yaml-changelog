import { Command, flags } from '@oclif/command';
import { exec } from 'child_process';
import * as fs from 'fs';
import { safeLoad } from 'js-yaml';
import { promisify } from 'util';

import { CHANGELOG_PATH } from '../constants';
import { Changelog } from '../types';

const execAsync = promisify(exec);

export default class Diff extends Command {
  static description = 'Compares the changelog against the previous revision, HEAD of a given branch' +
    ', or given commit hash';

  static flags = {
    help: flags.help({ char: 'h' }),
    branch: flags.string({ char: 'b', description: 'branch to compare against' }),
    revision: flags.string({ char: 'r', description: 'commit hash to compare against' }),
    count: flags.boolean({ char: 'c', description: 'only output the number of changes difference between revs' })
  };

  async run() {
    const { flags } = this.parse(Diff);
    if (flags.branch && flags.revision) {
      this.error('Only one of `branch` and `revision` may be provided');
      return -1;
    }

    const compareRev = flags.branch || flags.revision || 'HEAD^';
    const { stdout } = await execAsync(`git show ${compareRev}:${CHANGELOG_PATH}`);
    const oldChangelog: Changelog = safeLoad(stdout);
    const currentChangelog: Changelog = safeLoad(fs.readFileSync(CHANGELOG_PATH, 'utf-8'));

    if (flags.count) {
      this.log(`${currentChangelog.changes.length - oldChangelog.changes.length}`);
      return;
    }

    const difference = {
      newChanges: currentChangelog.changes.filter(cur => {
        return !oldChangelog.changes.some(old => old.timestamp === cur.timestamp);
      }),
      notIncluded: oldChangelog.changes.filter(old => {
        return !currentChangelog.changes.some(cur => cur.timestamp === old.timestamp);
      })
    };

    this.log(JSON.stringify(difference, null, 2));
  }
}
