import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Person from "./components/Person.vue";
import Main from "./components/Main.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Main,
    },
    {
      path: "/person/:id",
      name: "person",
      component: Person,
      props: true,
    },
  ],
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
