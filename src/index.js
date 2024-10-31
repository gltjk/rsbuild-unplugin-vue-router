import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import App from './App.vue';
import './index.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#root');
