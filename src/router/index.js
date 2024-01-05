import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import CommunityView from '../views/CommunityView.vue'
import BookmarkView from "../views/BookmarkView.vue"
import SigninView from "../views/SigninView.vue"
import SignupView from "../views/SignupView.vue"

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/community', name: 'community', component: CommunityView },
  { path: '/bookmark', name: 'bookmark', component: BookmarkView },
  { path: '/signin', name: 'signin', component: SigninView },
  { path: '/signup', name: 'signup', component: SignupView },
  //{ path: '/bookmark', name: 'bookmark',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/BookmarkView.vue')
  //},
  //{ path: '/menu', name: 'menu', component: MenuView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
