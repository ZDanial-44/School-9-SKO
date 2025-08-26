import { RouterLink } from 'vue-router'
import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/psychologist-${name.toLowerCase()}`,
    name: `psychologist${name}`,
    component: () => import(`@/views/pagesLink/psychologistLink/${name}.vue`),
    meta: {
      title: getMetaTitle('psychologist')
    }
  }
}

export default [
    Route('stress-before-exams'),
    Route('personal-boundaries'),
    Route('NO-VAPE'),
    Route('bullying'),
    Route('schoolshooting'),
    Route('modo'),
    Route('educators-and-parents'),
    Route('bullying-prevention'),
    Route('ideal-conditions'),
    Route('secure-Internet'),
]
