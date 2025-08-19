export default [
  {
    path: '/method-link-one',
    name: 'MethodLinkOne',
    component: () => import('@/views/pages/methodLink/methodLinkOne.vue')
  },
  {
    path: '/method-link-two',
    name: 'MethodLinkTwo',
    component: () => import('@/views/pages/methodLink/methodLinkTwo.vue')
  },
];
