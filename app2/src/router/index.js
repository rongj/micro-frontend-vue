import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app2",
    redirect: "/app2/page1"
  },
  {
    path: "/app2/page1",
    name: "app2-page1",
    component: () =>
      import(/* webpackChunkName: "app2-page1" */ "../views/Page1.vue")
  },
  {
    path: "/app2/page2",
    name: "app2-page2",
    component: () =>
      import(/* webpackChunkName: "app2-page2" */ "../views/Page2.vue")
  },
  {
    path: "/app2/page3",
    name: "app2-page3",
    component: () =>
      import(/* webpackChunkName: "app2-page3" */ "../views/Page3.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
