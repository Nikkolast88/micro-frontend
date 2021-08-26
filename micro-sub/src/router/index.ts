import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const constantRouter: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory('/micro-app/thinks/'),
  routes: constantRouter,
});

export function setupRouter(app: App) {
  app.use(router);
  // 路由守卫
}

export default router;