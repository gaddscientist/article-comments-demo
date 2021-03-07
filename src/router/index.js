import { createRouter, createWebHistory } from 'vue-router';
import Article from '../views/Article.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'Article',
    component: Article,
  },
  // {
  //   path: '/article',
  //   name: 'Article',
  //   component: Article,
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
