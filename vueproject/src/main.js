import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueForm from "vue-form";
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCartShopping, faArrowRightFromBracket);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
