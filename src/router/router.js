import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Sidebar from "../components/Sidebar.vue";
import Login from "../components/Login.vue";
import { authStore } from "../store/store";
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
    path: "/user",
    components: {
      default: User,
      LeftSideBar: Sidebar,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-profile",
    components: {
      default: EditProfile,
      LeftSideBar: Sidebar,
    },
  },
];

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
