import { createApp } from 'vue';
import App from './App.vue';
import { setupElementPlus, setupMicroApp } from '@/plugins';
import router, { setupRouter } from '@/router';
async function bootstrap() {

  const app = createApp(App);

  // 注册全局使用的组件，element-plus
  setupElementPlus(app);

  // 微前端
  setupMicroApp();

  // 注册路由
  setupRouter(app);

  // 路由装载完成
  await router.isReady();

  app.mount('#app');
}

void bootstrap();
