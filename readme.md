# ESBuild Template for Node/Browser Libraries

- Gulp
- TypeScript

[Use this template](https://github.com/ESBuildTemplates/ts-p5/generate)

## Library usage

### Browser

Library is exported as `lib` global variable. Edit it in [gulpfile](./gulpfile.js#L17)

## Node

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