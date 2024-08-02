import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import VideosDiversos from './components/VideosDiversos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'VideosDiversos',
    component: VideosDiversos
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
