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
  Route('LinkThree'),
  Route('modo'),
  Route('PresReliz'),
  Route('ped-1'),
  Route('sh-1'),
  Route('7th-graph'),
  Route('oq-city'),
  Route('S9SKO-i'),
  Route('23-24-Q'),
  Route('teachers-portfolio'),
  Route('eng-lessons'),
  Route('eng-lessons-Q'),
  Route('OZNO')
]
