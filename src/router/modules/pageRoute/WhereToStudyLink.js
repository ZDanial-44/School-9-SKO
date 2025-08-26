import { RouterLink } from 'vue-router'
import mainRoutes from '../mainLink.js'

function getMetaTitle(name) {
  const r = mainRoutes.find(route => route.name === name)
  return r?.meta?.title || { kz: '', ru: '' }
}

function Route(name) {
  return {
    path: `/WhereToStudy-${name.toLowerCase()}`,
    name: `WhereToStudy${name}`,
    component: () => import(`@/views/pagesLink/WhereToStudyLink/${name}.vue`),
    meta: {
      title: getMetaTitle('WhereToStudy')
    }
  }
}

export default [
    Route('meeting-EDU-representative'),
    Route('college-tour'),
    Route('rainbow-tour'),
    Route('career-guidance-event'),
    Route('open-day'),
    Route('Meetup-Career-Center'),
    Route('Meeting-Emergencies'),
    Route('skills-of-the-young-2025'),
    Route('professions'),
    Route('The-World-of-Professions'),
    Route('ZIXTO-tour')
]