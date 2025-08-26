import { RouterLink } from 'vue-router'
import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/attestation-${name.toLowerCase()}`,
    name: `attestation${name}`,
    component: () => import(`@/views/pagesLink/attestationLink/${name}.vue`),
    meta: {
      title: getMetaTitle('attestation')
    }
  }
}

export default [
    Route('teachers'),
    Route('terms-and-conditions'),
    Route('Order-N561'),
]