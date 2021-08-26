import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App);

  //
  setupRouter(app);

  await router.isReady()
};

void bootstrap();

createApp(App).mount('#app')
