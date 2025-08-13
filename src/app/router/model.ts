import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { MainPage } from "@/pages/main-page";
import { TestPage } from "@/pages/test-page";
import { ROUTES } from "@/shared";

const routes: RouteRecordRaw[] = [
  {
    path: ROUTES.MAIN_PAGE.PATH,
    name: ROUTES.MAIN_PAGE.NAME,
    component: MainPage
  },
  {
    path: ROUTES.TEST_PAGE.PATH,
    name: ROUTES.TEST_PAGE.NAME,
    component: TestPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
