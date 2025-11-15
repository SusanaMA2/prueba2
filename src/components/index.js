import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/vista.vue";
import DashboardView from "../components/dvista.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: DashboardView }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
