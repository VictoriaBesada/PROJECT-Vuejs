import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueForm from "vue-form";
import router from './router'
import store from './store'

Vue.config.productionTip = false;
/* eslint-disable */

Vue.use(VueForm, {
  inputClasses: {
    valid: "form-control-success",
    invalid: "form-control-danger",
  },
});

Vue.mixin({
  methods: {},
  data() {
    return {
      nombre: "",
      password: "",
    };
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
