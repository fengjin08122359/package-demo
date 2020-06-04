import {Vue} from '@/vendor'
import App from './App.vue'
import {mount} from './mount'
Vue.config.productionTip = false
console.log('a')
let vueInstance = new Vue({
  render: h => h(App),
})

if (process.env.VUE_APP_MOUNT_TARGET !== 'engineer') {
  mount(vueInstance)
}
export {
  vueInstance
}