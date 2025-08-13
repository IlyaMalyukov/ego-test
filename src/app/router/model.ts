import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { MainPage } from '@/pages/main-page';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Main",
        component: MainPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
