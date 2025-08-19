import { createRouter, createWebHashHistory } from 'vue-router'

import mainLinkRoutes from './modules/mainLink';
import methodLinkRoutes from './modules/methodLink';


export const routes = [
    ...methodLinkRoutes,
    ...mainLinkRoutes,
    
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router