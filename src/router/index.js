import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Communication from '@/views/Communication.vue';
import AnamenuHome from '@/views/AnamenuHome.vue';
import Blogs from '@/views/Blogs.vue';

Vue.use(VueRouter);

const routes = [
  // Rota tanımları burada
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Communication',
    name: 'Communication',
    component: Communication,
  },
  {
    path: '/AnamenuHome',
    name: 'AnamenuHome',
    component: AnamenuHome,
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;