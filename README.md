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
* [`yaml-changelog add`](#yaml-changelog-add)
* [`yaml-changelog diff`](#yaml-changelog-diff)
* [`yaml-changelog filter [FILE]`](#yaml-changelog-filter-file)
* [`yaml-changelog help [COMMAND]`](#yaml-changelog-help-command)
* [`yaml-changelog init`](#yaml-changelog-init)

## `yaml-changelog add`

Adds a document to CHANGELOG.yaml containing a username, story number (optional) and description of changes.

```
USAGE
  $ yaml-changelog add

OPTIONS
  -h, --help  show CLI help
```

## `yaml-changelog diff`

Compares the changelog against the previous revision, HEAD of a given branch, or given commit hash

```
USAGE
  $ yaml-changelog diff

OPTIONS
  -b, --branch=branch      branch to compare against
  -c, --count              only output the number of changes difference between revs
  -h, --help               show CLI help
  -r, --revision=revision  commit hash to compare against
```

## `yaml-changelog filter [FILE]`

describe the command here

```
USAGE
  $ yaml-changelog filter [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

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
<!-- commandsstop -->
