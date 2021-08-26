
import { App } from 'vue';

import { ElButton, ElMessage } from 'element-plus';

const components = [
  ElButton,
];
const plugins = [
  ElMessage
];
export function setupElementPlus(app: App) {
  components.forEach(component => {
    app.component(component.name, component);
  });

  plugins.forEach(plugin => {
    app.use(plugin);
  });
}