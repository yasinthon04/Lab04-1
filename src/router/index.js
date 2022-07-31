import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/events/EventDetailView.vue'
import EventRegisterView from '../views/events/EventRegisterView.vue'
import EventEditView from '../views/events/EventEditView.vue'
import EventLayoutView from '../views/events/EventLayoutView.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 3
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    component: EventLayoutView,
    props: true,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
        props: true
      },
      {
        path: 'register',
        name: 'EventRegisterView',
        component: EventRegisterView,
        props: true
      },
      {
        path: 'edit',
        name: 'EventEditView',
        component: EventEditView,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
