import Vue from "vue";
import App from "./App.vue";
import Store from "./store";
import Vuex from "vuex";

Vue.use(Vuex);

import "./assets/tailwind.css";

Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
