import { createApp } from 'vue';
import App from '../src/App.vue';
import router from '../src/router/main';

const app = createApp(App);

// Global error handler for Vue
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info);
};

// Function to replace Feather icons
const initFeatherIcons = () => {
  if (window.feather) {
    window.feather.replace();
  }
};

// Global mixin for initializing Feather icons
app.mixin({
  mounted() {
    initFeatherIcons();
  },
  updated() {
    initFeatherIcons(); // Optionally replace icons on update
  }
});

// Use the router and mount the app
app.use(router).mount('#app');
