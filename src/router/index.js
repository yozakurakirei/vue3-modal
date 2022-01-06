import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jobs from "../views/jobs/Jobs.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound404 from "../views/error/NotFound404.vue";
import MyBook from "../views/MyStudy/MyBook.vue";
import Instance from "../views/MyStudy/Instance.vue";
import CompositionApi from "../views/MyStudy/CompositionApi.vue";
import { setBlockTracking } from 'vue';
import Blog from "../views/blog/Blog.vue";

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
  },
  // study
  {
    path: "/mybook",
    name: "MyBook",
    component: MyBook,
  },
  {
    path: "/instance",
    name: "Instance",
    component: Instance
  },
  {
    path: "/composition",
    name: "CompositionApi",
    component: CompositionApi
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
