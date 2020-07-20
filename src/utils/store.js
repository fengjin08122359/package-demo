import { camelCase } from ".";

const files = require.context('@/store/modules', true, /\.js$/)
let pages = {};
files.keys().forEach(key => {
  pages[camelCase(('homepage-'+key).replace(/(\.\/|\.js)/g, ''))] = files(key).default;
})

export default pages