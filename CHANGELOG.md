# yaml-changelog

### 2019-05-13 - US233458
Implemented render-release command which accepts any number of releases.yaml files and renders them into a single markdown file\
BREAKING CHANGES - changed &#x27;service&#x27; to &#x27;project&#x27; in changelog.yaml; changed &#x27;CHANGELOG.yaml&#x27; to &#x27;changelog.yaml&#x27;

### 2019-05-13 - US233458
Renamed CHANGELOG.yaml -&gt; changelog.yaml\
Altered format of changelog.yaml - service -&gt; project\
Added release command which takes a date and generates releases.yaml with a new block containing all changes since the last release

### 2019-05-10
Added descending sort to &#x60;add&#x60; so that newest changes will be at the top of the changelog

### 2019-05-09 - US233458
Added render command which parses a yaml-changelog formatted changelog to generate a CHANGELOG.md

### 2019-05-08 - US233458
Implemented filter which returns all changes after a date given in YYYY-MM-DD format.\
Updated Changelog format to include the service name at the top level.

### 2019-05-08 - US233458
Added diff command to compare the current changelog against a branch, specific revision, or current revision.\
diff also includes a flag -c which will make it only log the difference in length between changelogs.

### 2019-05-07 - US233458
Implemented method to initialize CHANGELOG.yaml in expected format.\
Added method to append an object to changes with the timestamp, user, story, and description of changes.

