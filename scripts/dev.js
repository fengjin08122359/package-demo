/*
Run Rollup in watch mode for development.

To specific the package to watch, simply pass its name and the desired build
formats to watch (defaults to "global"):

```
# name supports fuzzy match. will watch all packages with name containing "dom"
yarn dev dom

# specify the format to output
yarn dev core --formats cjs

# Can also drop all __DEV__ blocks with:
__DEV__=false yarn dev
```
*/

const execa = require('execa')
const {
  fuzzyMatchTarget
} = require('./utils')
const args = require('minimist')(process.argv.slice(2))
const target = args._.length ? fuzzyMatchTarget(args._)[0] : ''
const formats = args.formats || args.f
const sourceMap = args.sourcemap || args.s

execa(
  `vue-cli-service`,
  [
    "serve",
  ], {
    stdio: 'inherit',
    env:{
      VUE_APP_node_entry: !target ? target : `src/packages/${target}/src/main.js`
      
    }
  }
)
