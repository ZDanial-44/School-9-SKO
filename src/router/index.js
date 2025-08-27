import { createRouter, createWebHashHistory } from 'vue-router'

import main         from './modules/mainLink.js';
import method       from './modules/pageRoute/methodLink.js';
import Inclusion    from './modules/pageRoute/InclusionLink.js';
import achievements from './modules/pageRoute/achievementsLink.js';
import attestation  from './modules/pageRoute/attestationLink.js';
import WhereToStudy from './modules/pageRoute/WhereToStudyLink.js';
import unt          from './modules/pageRoute/untLink.js';
import psychologist from './modules/pageRoute/psychologistLink.js';

import NotFound from "@/views/NotFound.vue";


export const routes = [
    ...method,
    ...main,
    ...Inclusion,
    ...achievements,
    ...attestation,
    ...WhereToStudy,
    ...unt,
    ...psychologist,
    
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router