import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '@/pages/login/index')
        },
        {
            path: '/',
            name: 'home',
            component: () => import(/* wepackChunkName:"home" */ '@/pages/home')
        }
    ]
});
