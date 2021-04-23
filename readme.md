# ESBuild Template for Node/Browser Libraries

- Gulp
- TypeScript

[Use this template](https://github.com/ESBuildTemplates/ts-lib/generate)

## Library usage

### Browser

Library is exported as `lib` global variable. Edit it in [gulpfile](./gulpfile.js#L17)

### Node

```js
// JavaScript
const lib = require("lib-name")

console.log(lib.hello())
```

```ts
// TypeScript
import lib from "lib-name"

console.log(lib.hello())
```
