import {Vue, Router} from '@/vendor'


const Main = () => import('../pages/Main.vue')
const Single = () => import('../pages/Single.vue')

Vue.use(Router);

var router = new Router({
    routes: [
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
            path: '/Single',
            name: 'Single',
            component: Single
        }
    ],
})

export default router