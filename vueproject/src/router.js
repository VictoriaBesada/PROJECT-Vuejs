import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './pages/LoginPage'


Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      props: true,
    },
    {
      path: "/main",
      name: "main",
      component: () => import("./pages/ListadoPage"),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("./pages/RegistroPage"),
    },
    {
      path: "/detalle",
      name: "detalle",
      component: () => import("./pages/InfoPage"),
    },
    {
      path: "/carrito",
      name: "carrito",
      component: () => import("./pages/CarritoPage"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./pages/AdminPage"),
    },
  ],
});