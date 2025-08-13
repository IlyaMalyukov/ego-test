import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { MainPage } from "@/pages/main-page";
import { TestPage } from "@/pages/test-page";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: MainPage
  },
  {
    path: "/test-page",
    name: "test-page",
    component: TestPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
