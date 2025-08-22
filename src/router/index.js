import { createRouter, createWebHashHistory } from 'vue-router'

import mainLinkRoutes from './modules/mainLink.js';
import methodLinkRoutes from './modules/pageRoute/methodLink.js';
import InclusionLinkRoutes from './modules/pageRoute/InclusionLink.js';
import NotFound from "@/views/NotFound.vue";


export const routes = [
    ...methodLinkRoutes,
    ...mainLinkRoutes,
    ...InclusionLinkRoutes,
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router