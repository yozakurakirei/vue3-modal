import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from "../views/jobs/Jobs.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound404 from "../views/error/NotFound404.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/ather",
    name: "Ather",
    component: () => import("../views/Ather.vue")
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/00000:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound404",
    component: NotFound404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
