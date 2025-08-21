import { createRouter, createWebHashHistory } from 'vue-router'

import mainLinkRoutes from './modules/mainLink.js';
import methodLinkRoutes from './modules/pageRoute/methodLink.js';


export const routes = [
    ...methodLinkRoutes,
    ...mainLinkRoutes,
    
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router