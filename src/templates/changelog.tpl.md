# {{this.project}}
{{#each this.changes}}

### {{this.timestamp}}{{#if this.story}} - {{this.story}}{{/if}}
{{this.description}}
{{/each}}