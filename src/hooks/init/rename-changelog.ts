import { Hook } from '@oclif/config';
import { exec } from 'child_process';
import { existsSync } from 'fs';
import { promisify } from 'util';

import { CHANGELOG_PATH, OLD_PATH } from '../../constants';

const execAsync = promisify(exec);

const hook: Hook<'init'> = async function () {
  if (existsSync(OLD_PATH)) {
    await execAsync(`mv ${OLD_PATH} ${CHANGELOG_PATH}`);
  }
};

export default hook;
