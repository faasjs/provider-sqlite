# @faasjs/provider-sqlite

Sqlite 适配

[![License: MIT](https://img.shields.io/npm/l/@faasjs/provider-sqlite.svg)](https://github.com/faasjs/provider-sqlite/blob/master/LICENSE)
[![Build Status](https://img.shields.io/travis/com/faasjs/provider-sqlite.svg)](https://travis-ci.com/faasjs/provider-sqlite)
[![Coverage Status](https://img.shields.io/codecov/c/github/faasjs/provider-sqlite.svg)](https://codecov.io/gh/faasjs/provider-sqlite)
[![NPM Stable Version](https://img.shields.io/npm/v/@faasjs/provider-sqlite/stable.svg)](https://www.npmjs.com/package/@faasjs/provider-sqlite)
[![NPM Beta Version](https://img.shields.io/npm/v/@faasjs/provider-sqlite/beta.svg)](https://www.npmjs.com/package/@faasjs/provider-sqlite)

[接口文档](https://github.com/faasjs/provider-sqlite/blob/master/API.md)

## How to use?

1. Add npm to package.json: `yarn add @faasjs/provider-sqlite@beta`;
2. Config connection info in providers folder, support host, user, password and database;
3. Use it in flow:

```typescript
new Flow({
  resources: {
    sqlite: {}
  }
}, async function(){
  const results = await this.sqlite.query('SELECT user from id = ?', ['1']);
  console.log(results[0].id); // => 1
})
```