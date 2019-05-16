# 2019-05-16 09:19:12
**[yaml-changelog]**
- Removed changelog initialization from &#x60;add&#x60; command as it doesn&#x27;t work properly. Best to use &#x60;init&#x60; directly.

# 2019-05-13 16:30:49
**[yaml-changelog]**
- Implemented render-release command which accepts any number of releases.yaml files and renders them into a single markdown file
BREAKING CHANGES - changed &#x27;service&#x27; to &#x27;project&#x27; in changelog.yaml; changed &#x27;CHANGELOG.yaml&#x27; to &#x27;changelog.yaml&#x27;
- Renamed CHANGELOG.yaml -&gt; changelog.yaml
Altered format of changelog.yaml - service -&gt; project
Added release command which takes a date and generates releases.yaml with a new block containing all changes since the last release

# 2019-05-11 00:00:00
**[yaml-changelog]**
- Added descending sort to &#x60;add&#x60; so that newest changes will be at the top of the changelog
- Added render command which parses a yaml-changelog formatted changelog to generate a CHANGELOG.md
- Implemented filter which returns all changes after a date given in YYYY-MM-DD format.
Updated Changelog format to include the service name at the top level.
- Added diff command to compare the current changelog against a branch, specific revision, or current revision.
diff also includes a flag -c which will make it only log the difference in length between changelogs.
- Implemented method to initialize CHANGELOG.yaml in expected format.
Added method to append an object to changes with the timestamp, user, story, and description of changes.


