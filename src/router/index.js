import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () =>
      import(/* webpackChunkName: "forget-password" */ "../views/ForgetPassword.vue")
  },
  {
    path: "/main",
    name: "Main",
    meta: {title: 'Main'},
    //beforeEnter: guardMyroute,
    children: [
      {
        path: "/main/home",
        name: "Home",
        icon:'home',
        component: () =>
          import(/* webpackChunkName: "home-screen" */ "../views/screens/Home.vue")
      },
      {
        path: "/main/profile",
        name: "Profile",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/screens/Profile.vue")
      },
      {
        path: "/main/messages",
        name: "Messages",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "messages" */ "../views/screens/Messages.vue")
      },
      {
        path: "/main/settings",
        name: "Settings",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "settings" */ "../views/screens/Settings.vue")
      },
      {
        path: "/main/activity",
        name: "Activity",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "activities" */ "../views/screens/Notifications.vue")
      },
      {
        path: "/main/post",
        name: "Post",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "post" */ "../views/screens/Post.vue")
      },
      {
        path: "/main/status",
        name: "Status",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "status" */ "../views/screens/Status.vue")
      },
      {
        path: "/main/find-a-friend",
        name: "FindFriend",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "findfriend" */ "../views/screens/FindFriends.vue")
      },
      {
        path: "/main/chat",
        name: "Chat",
        icon:'account_circle',
        component: () =>
          import(/* webpackChunkName: "chat" */ "../views/screens/Chat.vue")
      }
    ],
    component: () =>
      import(/* webpackChunkName: "main-area" */ "../views/screens/Main.vue")
  }
];


const router = new VueRouter({
  routes,
  mode: 'hash',
  base: process.env.VUE_ROUTER_BASE
})

export default router;
