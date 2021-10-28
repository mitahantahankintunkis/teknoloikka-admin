import { createRouter, createWebHistory } from 'vue-router';
//import VueRouter from 'vuo-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Hello.vue')
        },
        //{
        //    path: '/register',
        //    component: () => import('../views/Register.vue')
        //},
        //{
        //    path: '/sign-in',
        //    component: () => import('../views/SignIn.vue')
        //},
        //{
        //    path: '/feed',
        //    component: () => import('../views/Feed.vue')
        //}
    ]
});

export default router;
