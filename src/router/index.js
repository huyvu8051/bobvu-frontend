import Vue from "vue";
import Router from "vue-router";

import Parcheesi from "@/components/Parcheesi";
import Post from "@/components/Post";
import Signup from "@/components/Signup";
import Error from "@/components/Error";
import Account from "@/components/Account";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/post/:url',
      name: 'post',
      component: Post
    },
    {
      path: "/error",
      name: "404",
      component: Error
    },
    {
      path: "/parcheesi",
      name: "parcheesi",
      component: Parcheesi
    },
    {
      path: "/account",
      name: "account",
      component: Account
    }
  ]
});
