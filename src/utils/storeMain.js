import { camelCase } from ".";

var vueFiles = require.context('@/packages/', true, /\/src\/store\/modules\/[\s\S]*.js$/)

let vuePages = {}
vueFiles.keys().forEach(key => {
  let changeKey = key.replace(/\.\//g, '').replace(/\/src\/store\/modules/g, '').replace(/(\.\/|\.js)/g, '')
  vuePages[camelCase(changeKey.replace(/\//g, '-'))] = vueFiles(key).default;
})

export default vuePages