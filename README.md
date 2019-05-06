yaml-changelog <!-- omit in toc -->
==============

A simple cli tool for creating and adding to a project&#39;s yaml formatted changelog

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![Downloads/week](https://img.shields.io/npm/dw/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![License](https://img.shields.io/npm/l/yaml-changelog.svg)](https://github.com/goistjt/yaml-changelog/blob/master/package.json)

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
* [`yaml-changelog hello [FILE]`](#yaml-changelog-hello-file)
* [`yaml-changelog help [COMMAND]`](#yaml-changelog-help-command)
* [`yaml-changelog init [FILE]`](#yaml-changelog-init-file)

## `yaml-changelog hello [FILE]`

describe the command here

```
USAGE
  $ yaml-changelog hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ yaml-changelog hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/goistjt/yaml-changelog/blob/v0.0.0/src/commands/hello.ts)_

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

## `yaml-changelog init [FILE]`

describe the command here

```
USAGE
  $ yaml-changelog init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/goistjt/yaml-changelog/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
