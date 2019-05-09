yaml-changelog <!-- omit in toc -->
==============

A simple cli tool for creating and adding to a project&#39;s yaml formatted changelog

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![Downloads/week](https://img.shields.io/npm/dw/yaml-changelog.svg)](https://npmjs.org/package/yaml-changelog)
[![License](https://img.shields.io/npm/l/yaml-changelog.svg)](https://github.com/Cox-Automotive/yaml-changelog/blob/master/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Contributing](#contributing)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @cox-automotive/yaml-changelog
$ yaml-changelog COMMAND
running command...
$ yaml-changelog (-v|--version|version)
@cox-automotive/yaml-changelog/0.0.3 darwin-x64 node-v10.15.3
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
* [`yaml-changelog filter [DATE]`](#yaml-changelog-filter-date)
* [`yaml-changelog help [COMMAND]`](#yaml-changelog-help-command)
* [`yaml-changelog init [SERVICE]`](#yaml-changelog-init-service)
* [`yaml-changelog render [FILE]`](#yaml-changelog-render-file)

## `yaml-changelog add`

Adds a document to CHANGELOG.yaml containing a username, story number (optional) and description of changes.

```
USAGE
  $ yaml-changelog add

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/Cox-Automotive/yaml-changelog/blob/v0.0.3/src/commands/add.ts)_

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

_See code: [src/commands/diff.ts](https://github.com/Cox-Automotive/yaml-changelog/blob/v0.0.3/src/commands/diff.ts)_

## `yaml-changelog filter [DATE]`

Dislays all entries in the changelog after the provided date

```
USAGE
  $ yaml-changelog filter [DATE]

ARGUMENTS
  DATE  A date in ISO 8601 format

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/filter.ts](https://github.com/Cox-Automotive/yaml-changelog/blob/v0.0.3/src/commands/filter.ts)_

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

## `yaml-changelog init [SERVICE]`

Create an empty CHANGELOG.yaml

```
USAGE
  $ yaml-changelog init [SERVICE]

ARGUMENTS
  SERVICE  Name of the service the changelog is being created in

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/Cox-Automotive/yaml-changelog/blob/v0.0.3/src/commands/init.ts)_

## `yaml-changelog render [FILE]`

Renders a given changelog to markdown

```
USAGE
  $ yaml-changelog render [FILE]

ARGUMENTS
  FILE  Changelog file to render

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/render.ts](https://github.com/Cox-Automotive/yaml-changelog/blob/v0.0.3/src/commands/render.ts)_
<!-- commandsstop -->
# Contributing
<!-- contribute -->
## Prereqs
- [Typescript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [OCLIF](https://github.com/oclif/oclif) - Adding additional commands
- [Yarn](https://yarnpkg.com/en/) - Dependency management
<!-- contributestop -->
