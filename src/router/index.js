import { createRouter, createWebHistory } from 'vue-router';
import Article from '../views/Article.vue';
import Auth from '../views/Auth.vue';
import NotFound from '../views/NotFound.vue';

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
    component: Auth,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Auth,
  },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
