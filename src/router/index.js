import { createRouter, createWebHistory } from 'vue-router'
import FirstpageView from "../views/FirstpageView.vue"
import HomeView from "../views/HomeView.vue"
import CommunityView from '../views/CommunityView.vue'
import BookmarkView from "../views/BookmarkView.vue"
import LoginView from "../views/LoginView.vue"
import SignupView from "../views/SignupView.vue"
import MypageView from "../views/MypageView.vue"
import TeampageView from "../views/TeampageView.vue"
import CreateNewView from "../views/CreateNewView.vue"

const routes = [
  { path: '/', name: 'firstpage', component: FirstpageView },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/bookmark/:teampageUuid', name: 'bookmark', component: BookmarkView, props: true },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignupView },
  { path: '/mypage', name: 'mypage', component: MypageView },
  { path: '/teampage/:teampageUuid', name: 'TeampageView', component: TeampageView, props: true},
  { path: '/community', name: 'community', component: CommunityView },
  //{ path: '/bookmark', name: 'bookmark',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/BookmarkView.vue')
  //},
  //{ path: '/menu', name: 'menu', component: MenuView },
  { path: '/createnew', name: 'createnew', component: CreateNewView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
