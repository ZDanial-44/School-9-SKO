import { RouterLink } from 'vue-router'
import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/achievements-${name.toLowerCase()}`,
    name: `achievements${name}`,
    component: () => import(`@/views/pagesLink/achievementsLink/${name}.vue`),
    meta: {
      title: getMetaTitle('achievements')
    }
  }
}

export default [
  Route('volleyball'),
  Route('regional-forum'),
  Route('events'),
  Route('poetry-contest'),
  Route('super-star'),
  Route('traditions-and-customs'),
]