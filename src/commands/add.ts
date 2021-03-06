import { Command, flags } from '@oclif/command';
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import { safeDump, safeLoad } from 'js-yaml';
import * as moment from 'moment';

import { CHANGELOG_PATH } from '../constants';
import { Change, Changelog } from '../types';

export default class Add extends Command {
  static description = `Adds a document to ${CHANGELOG_PATH} containing a username, story number (optional) ` +
    'and description of changes.';

  static flags = {
    help: flags.help({ char: 'h' })
  };

  buildChangelogMessage = (answers: inquirer.Answers): Change => {
    return {
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      user: answers.user,
      ...answers.story && { story: answers.story },
      description: answers.description
    };
  }

  async run() {
    const questions: inquirer.Question[] = [
      {
        name: 'user',
        type: 'input',
        message: 'Please input your username or email address:',
        default: process.env.USER || process.env.USERNAME,
        filter: (input: string) => input.trim(),
        validate: (value: string) => {
          if (value.length) {
            return true;
          }
          return 'Username must have least one character';
        }
      },
      {
        name: 'story',
        type: 'input',
        message: 'Please input a user story number (optional):',
        filter: (input: string) => input.trim().toUpperCase(),
        validate: (value: string) => {
          if (!value.length) {
            return true;
          }
          if (!value.match(/^((US|DE)\d+ ?)+$/g)) {
            return 'Stories must begin with \'US\' or \'DE\' and be followed by numbers';
          }
          return true;
        }
      },
      {
        name: 'description',
        type: 'editor',
        message: 'Please enter a description of the changes made: ',
        filter: (input: string) => input.trim(),
        validate: (value: string) => {
          if (value.length) {
            return true;
          }
          return 'Description must not be empty';
        }
      }
    ];

    if (!fs.existsSync(CHANGELOG_PATH)) {
      this.error(`${CHANGELOG_PATH} does not exist, please run 'yaml-changelog init <project_name>'`, { exit: -1 });
    }

    const answers = await inquirer.prompt(questions);
    const changelog: Changelog = safeLoad(fs.readFileSync(CHANGELOG_PATH, 'utf-8'));
    changelog.changes.unshift(this.buildChangelogMessage(answers));
    changelog.changes = changelog.changes.sort((a, b) => {
      return moment(a.timestamp).isAfter(moment(b.timestamp)) ? -1 : 1;
    });
    fs.writeFileSync(CHANGELOG_PATH, safeDump(changelog, { lineWidth: 120 }));
  }
}
