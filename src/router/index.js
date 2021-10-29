import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/TodoPage.vue'),
        },
        {
            path: '/polut',
            component: () => import('../views/Editor/ConversationEditor.vue'),
        },
        {
            path: '/analytiikka',
            component: () => import('../views/Anal/ConversationAnal2.vue'),
        },
        {
            path: '/analytiikka/:id',
            component: () => import('../views/Anal/ConversationAnal.vue'),
        },
        {
            path: '/asetukset',
            component: () => import('../views/TodoPage.vue'),
        },
    ]
});

export default router;
