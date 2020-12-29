import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/restaurant/:id",
    name: "Restaurant",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurant.vue"),
  },
  {
    path: "/sign_in",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Singin.vue"),
  },
  {
    path: "/sign_up",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
