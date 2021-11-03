import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/TodoPage.vue'),
        },
        {
            path: '/polut',
            component: () => import('../views/TodoPage.vue'),
        },
        {
            path: '/analytiikka',
            component: () => import('../views/Anal/ConversationAnal2.vue'),
        },
        {
            path: '/asetukset',
            component: () => import('../views/TodoPage.vue'),
        },
    ]
});

export default router;
