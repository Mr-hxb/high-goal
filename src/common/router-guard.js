import store from '@/store';

export default function (router) {
    router.beforeEach((to, from, next) => {
        console.log(store);
        if (store.state.isLogin) {
            next();
            return;
        }
        if (to.path === '/login') {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    retUrl: window.location.href
                }
            });
        }
    });
}
