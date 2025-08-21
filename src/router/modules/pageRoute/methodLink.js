import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/method-${name.toLowerCase()}`,
    name: `Method${name}`,
    component: () => import(`@/views/pagesLink/methodLink/${name}.vue`),
    meta: {
      title: getMetaTitle('Method')
    }
  }
}

export default [
  Route('LinkOne'),
  Route('LinkTwo'),
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
  Route('eng-lessons-Q')
]
