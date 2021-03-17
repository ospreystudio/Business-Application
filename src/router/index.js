import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Contacts from '../components/layuot/Contacts.vue'
import Develop from '../components/layuot/Develop.vue'
import Video from '../components/layuot/Video.vue'
import Vacancy from '../components/layuot/Vacancy.vue'
import UxUi from '../components/layuot/UxUi.vue'
import Design from '../components/layuot/Design.vue'
import enContacts from '../components/EN/enContacts.vue'
import enDesign from '../components/EN/enDesign.vue'
import enDevelop from '../components/EN/enDevelop.vue'
import Enmain from '../components/Enmain.vue'
import enUxUi from '../components/EN/enUxUi.vue'
import enVacancy from '../components/EN/enVacancy.vue'
import enVideo from '../components/EN/enVideo.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },

  {
    path: '/design',
    name: 'Design',
    component: Design,

  },

  {
    path: '/uxui',
    name: 'UxUi',
    component: UxUi,

  },
  {
    path: '/develop',
    name: 'Develop',
    component: Develop,

  },

  {
    path: '/video',
    name: 'Video',
    component: Video,
 
  },

  {
    path: '/vacancy',
    name: 'Vacancy',
    component: Vacancy,

  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },

  {
    path: '/encontacts',
    name: 'enContacts',
    component: enContacts,
  },

  
  {
    path: '/endesign',
    name: 'enDesign',
    component: enDesign,
  },

  {
    path: '/endevelop',
    name: 'enDevelop',
    component: enDevelop,
  },

  {
    path: '/enmain',
    name: 'Enmain',
    component: Enmain,
  },

  {
    path: '/enuxui',
    name: 'enUxUi',
    component: enUxUi,
  },

  {
    path: '/envacancy',
    name: 'enVacancy',
    component: enVacancy,
  },

  {
    path: '/envideo',
    name: 'enVideo',
    component: enVideo,
  },









]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
