import Vue from "vue";
import Router from "vue-router";
import Signin from "../src/components/Signin.vue";
import Signup from "../src/components/Signup.vue";
import Dashboard from "../src/components/Dashboard.vue";
import CreateEvent from "../src/components/CreateEvent.vue";
import Details from "../src/components/Details.vue";
import Edit from "../src/components/Edit.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Signin,
      name: "signin",
      props: true
    },
    {
      path: "/signin",
      component: Signin,
      name: "signin",
      props: true
    },
    {
      path: "/signup",
      component: Signup,
      name: "signup",
      props: true
    },
    {
      path: "/home",
      component: Dashboard,
      name: "home",
      props: true
    },
    {
      path: "/create",
      component: CreateEvent,
      name: "create",
      props: true
    },
    {
      path: "/details",
      component: Details,
      name: "details",
      props: true
    },
    {
      path: "/edit",
      component: Edit,
      name: "edit",
      props: true
    }
  ]
});
