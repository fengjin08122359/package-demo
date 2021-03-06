import Vue from 'vue'
import VueRouter from 'vue-router'
import generator from '../utils/router'
import generatorMain from '../utils/routerMain'

Vue.use(VueRouter)
const routes = [
    ...generator,
    ...generatorMain,
];

console.log(routes)
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