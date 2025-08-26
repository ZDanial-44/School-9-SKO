import { RouterLink } from 'vue-router'
import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/unt-${name.toLowerCase()}`,
    name: `unt${name}`,
    component: () => import(`@/views/pagesLink/untLink/${name}.vue`),
    meta: {
      title: getMetaTitle('unt')
    }
  }
}

export default [
    Route('results')
]