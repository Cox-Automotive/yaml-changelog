yaml-changelog <!-- omit in toc -->
==============

A simple cli tool for creating and adding to a project&#39;s yaml formatted changelog

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![Downloads/week](https://img.shields.io/npm/dw/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![License](https://img.shields.io/npm/l/yaml-changelog.svg)](https://ghe.coxautoinc.com/Jeremiah-Goist/yaml-changelog/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g yaml-changelog
$ yaml-changelog COMMAND
running command...
$ yaml-changelog (-v|--version|version)
yaml-changelog/0.0.0 darwin-x64 node-v10.15.3
$ yaml-changelog --help [COMMAND]
USAGE
  $ yaml-changelog COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`yaml-changelog add [FILE]`](#yaml-changelog-add-file)
* [`yaml-changelog help [COMMAND]`](#yaml-changelog-help-command)
* [`yaml-changelog init`](#yaml-changelog-init)

## `yaml-changelog add [FILE]`

describe the command here

```
USAGE
  $ yaml-changelog add [FILE]

OPTIONS
  -h, --help       show CLI help
```

_See code: [src/commands/add.ts](https://ghe.coxautoinc.com/Jeremiah-Goist/yaml-changelog/blob/v0.0.0/src/commands/add.ts)_

## `yaml-changelog help [COMMAND]`

display help for yaml-changelog

```
USAGE
  $ yaml-changelog help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `yaml-changelog init`

Create an empty CHANGELOG.yaml

```
USAGE
  $ yaml-changelog init

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://ghe.coxautoinc.com/Jeremiah-Goist/yaml-changelog/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
