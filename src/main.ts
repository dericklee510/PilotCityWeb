import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// const v = 2;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    chicken() {}
  },
  render: h => h(App)
}).$mount("#app");
