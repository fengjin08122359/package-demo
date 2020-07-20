import Vue from "vue";
import Vuex from "vuex";
import storeModule from '../utils/store'
import storeMainModule from '../utils/storeMain'

let modules = {
  ...storeModule,
  ...storeMainModule
}

console.log(modules)
Vue.use(Vuex);

export default new Vuex.Store({
  modules: modules
});
