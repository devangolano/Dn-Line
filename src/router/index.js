import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login/index.vue";
import Home from "../pages/Home/index.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
