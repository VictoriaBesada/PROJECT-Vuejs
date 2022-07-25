import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueForm from "vue-form";

Vue.config.productionTip = false;

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
      usuario: "",
      password: "",
    };
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
