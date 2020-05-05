// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueFullPage from "vue-fullpage.js";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueFullPage);
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places"
  }
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  template: "<App/>"
});
