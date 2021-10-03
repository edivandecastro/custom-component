import Vue from "vue";
import Router from "vue-router";
import ExampleVModel from "../views/ExampleVModel.vue";

Vue.use(Router);

const routes = [
  {
    path: "/example-input-vmodel-vuex",
    name: "example",
    component: ExampleVModel,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
