import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./pages/Home.vue'),
            props: {
                multiplicativeOutcomes: {
                    "f000-2": 0.45,
                    "f001-2": 0.55,
                    "f002-2": 0.67,
                    "f003-1": 0.82,
                    "f004-2": 1.00,
                    "f005-1": 1.22,
                    "f006-1": 1.50,
                    "f007-2": 1.83,
                    "f008-2": 2.24,
                },
                additiveOutcomes: {
                    "f000-2": -428,
                    "f001-2": -321,
                    "f002-2": -241,
                    "f003-1": -107,
                    "f004-2": 0,
                    "f005-1": 107,
                    "f006-1": 241,
                    "f007-2": 321,
                    "f008-2": 428,
                }
            }
        }
    ]
})
