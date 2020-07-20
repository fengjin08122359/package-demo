import {
    convertRouter
} from './convertRouter'
var vueFiles = require.context('@/packages/', true, /\/src\/views\/[\s\S]*.vue$/)

let vuePages = {}
vueFiles.keys().forEach(key => {
    let changeKey = key.replace(/\.\//g, '').replace(/\/src\/views/g, '').replace(/(\.\/|\.vue)/g, '')
    vuePages[changeKey] = vueFiles(key).default;

})


export default convertRouter(vuePages)