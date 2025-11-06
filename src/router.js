import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            props: { msg: 'Daily Recipe Tool' },
            component: () => import('./pages/Home.vue')
        }
    ]
})
