import { createRouter, createWebHistory } from 'vue-router';
 
import ArticleGenerator from '../views/chat/ArticleGenerator.vue' 

const routes = [
  { path: '/', component: ArticleGenerator }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;