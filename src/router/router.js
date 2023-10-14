import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";
import Sidebar from "../components/Sidebar.vue";
import Protected from "../components/Protected.vue";
import Login from "../components/Login.vue";
import { authStore } from "../store/store";
import Cart from "../components/Cart.vue";
import User from "../components/User.vue";
import EditProfile from "../components/EditProfile.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/login",
    components: {
      default: Login,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/products",
    components: {
      default: Products,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/user",
    components: {
      default: User,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/edit-profile",
    components: {
      default: EditProfile,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/cart",
    components: {
      default: Cart,
      LeftSideBar: Sidebar,
    },
  },
  {
    path: "/products/:id",
    components: {
      default: Product,
      LeftSideBar: Sidebar,
    },
    name: "product",
  },
  {
    path: "/protected",
    components: {
      default: Protected,
      LeftSideBar: Sidebar,
    },
    meta: {
      requiresAuth: true,
    },
  },
];

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
