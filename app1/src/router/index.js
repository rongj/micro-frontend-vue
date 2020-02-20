import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app1",
    redirect: "/app1/page1"
  },
  {
    path: "/app1/page1",
    name: "app1-page1",
    component: () =>
      import(/* webpackChunkName: "app1-page1" */ "../views/Page1.vue")
  },
  {
    path: "/app1/page2",
    name: "app1-page2",
    component: () =>
      import(/* webpackChunkName: "app1-page2" */ "../views/Page2.vue")
  },
  {
    path: "/app1/page3",
    name: "app1-page3",
    component: () =>
      import(/* webpackChunkName: "app1-page3" */ "../views/Page3.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
