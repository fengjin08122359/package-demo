import Vue from 'vue'
import VueRouter from 'vue-router'
import pkg from '../../package.json'
import {convertRouter} from '@/utils/convertRouter'

const files = require.context('../views', true, /\.vue$/)
let pages = {};
files.keys().forEach(key => {
  pages[pkg.name + '/' +key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})
console.log(pages)
let generator = convertRouter(pages)
console.log(generator)
Vue.use(VueRouter)

const routes = [
    ...generator,
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,//使用
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    },
  });
  router.beforeEach((to,from,next) => {
    next()
  })

export default router;