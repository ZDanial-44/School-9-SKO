import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/Inclusion-${name.toLowerCase()}`,
    name: `Inclusion${name}`,
    component: () => import(`@/views/pagesLink/InclusionLink/${name}.vue`),
    meta: {
      title: getMetaTitle('Inclusion')
    }
  }
}

export default [
  Route('unlimited-creative'),
  Route('experience-and-internship'),
  Route('MES-RK-Orders'),
  Route('Position-of-inclusion'),
  Route('order'),
  Route('work-plan'),
  Route('working-group'),
  Route('in-action'),
  Route('Stars-of-Demeu')
]
