import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../src/router/main'

const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info);
};
app.use(router).mount('#app');