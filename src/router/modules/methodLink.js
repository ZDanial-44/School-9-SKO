export default [
  {
    path: '/method-link-one',
    name: 'MethodLinkOne',
    component: () => import('@/views/methodLink/LinkOne.vue')
  },
  {
    path: '/method-link-two',
    name: 'MethodLinkTwo',
    component: () => import('@/views/methodLink/LinkTwo.vue')
  },
  {
    path: '/method-link-three',
    name: 'MethodLinkThree',
    component: () => import('@/views/methodLink/LinkThree.vue')
  },
  {
    path: '/method-ped-1',
    name: 'MethodPed1',
    component: () => import('@/views/methodLink/ped-1.vue')
  },
  {
    path: '/sh-1',
    name: 'MethodSH1',
    component: () => import('@/views/methodLink/sh-1.vue')
  },
  {
    path: '/modo',
    name: 'MethodModo',
    component: () => import('@/views/methodLink/modo.vue')
  },
  {
    path: '/PresReliz',
    name: 'MethodPresReliz',
    component: () => import('@/views/methodLink/PresReliz.vue')
  },
  {
    path: '/7th-graph',
    name: 'Method7thGraph',
    component: () => import('@/views/methodLink/7th-graph.vue')
  },
  {
    path: '/oq-city',
    name: 'MethodOqCity',
    component: () => import('@/views/methodLink/oq-city.vue')
  },
  {
    path: '/S9SKO-i',
    name: 'MethodS9SKO-i',
    component: () => import('@/views/methodLink/S9SKO-i.vue')
  },
  {
    path: '/23-24-Q',
    name: 'Method23-24-Q',
    component: () => import('@/views/methodLink/23-24-Q.vue')
  },
  {
    path: '/teachers-portfolio',
    name: 'MethodTeachersPortfolio',
    component: () => import('@/views/methodLink/teachers-portfolio.vue')
  },
  {
    path: '/eng-lessons',
    name: 'MethodEng-lessons',
    component: () => import('@/views/methodLink/eng-lessons.vue')
  },
  {
    path: '/eng-lessons-Q',
    name: 'MethodEng-lessons-Q',
    component: () => import('@/views/methodLink/eng-lessons-Q.vue')
  },
];
