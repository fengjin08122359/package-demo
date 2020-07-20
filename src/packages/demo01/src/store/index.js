import Vue from "vue";
import Vuex from "vuex";
import {camelCase} from '@/utils'
import pkg from '../../package.json'

const files = require.context('./modules', true, /\.js$/)
let modules = {};
files.keys().forEach(key => {
  modules[camelCase((pkg.name+'-'+key).replace(/(\.\/|\.js)/g, ''))] = files(key).default;
})


console.log(modules)
Vue.use(Vuex);

export default new Vuex.Store({
  modules: modules
});
