import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
import RouteEntry from '@/components/RouteEntry.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView,
      redirect: { path: 'collections/spectacles-women' },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/collections',
      name: 'collections',
      component: RouteEntry,
      children: [
        {
          path: '',
          name: 'collections.index',
          // redirect: { name: 'collections.type' },
          redirect: { path: 'collections/spectacles-women' },
        },
        {
          path: '/collections/:slug',
          name: 'collections.type',
          component: () => import('@/views/pages/collections-home.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/PageNotFound.vue'),
    },
  ],
});

export default router;
