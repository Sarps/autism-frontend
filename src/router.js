import Vue from "vue";
import Router from "vue-router";
import Menu from "./views/Menu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Menu
    },
    {
      path: "/login",
      name: "login",
      component: () => import(`./views/Login.vue`)
    },
    {
      path: "/level1",
      name: "level1",
      component: () => import(`./views/level1.vue`)
    },
    {
      path: "/level2",
      name: "level2",
      component: () => import(`./views/level2.vue`)
    },
    {
      path: "/test",
      name: "test",
      component: () => import(`./views/menu3.vue`)
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
