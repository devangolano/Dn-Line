import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/auth/Login/index.vue";
import Signup from "../pages/auth/Signup/index.vue";
import ResetPassword from "../pages/auth/ResetPassword/index.vue";
import Home from "../pages/Home/index.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/resetPassword", name: "ResetPassword", component: ResetPassword },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
