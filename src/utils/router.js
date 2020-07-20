import {convertRouter} from './convertRouter'

const files = require.context('@/views', true, /\.vue$/)
let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})

export default convertRouter(pages)