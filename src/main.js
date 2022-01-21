import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { priceFormat } from "./utils/formaterFunctions";
import components from "@/components";
// Se realizan llamadas en todos los sitios, para esto lo mejor es un plugin
import API from "@/plugins/api";

// Con esto ya puedes usar en cualquier parte de VUE axios, usando this.$API.get(). Mira dentro del Plugin api.js
Vue.use(API);

Vue.config.productionTip = false;

Vue.filter("priceFormat", priceFormat);

// Cargamos los componentes de forma global
Object.keys(components).forEach((name) => {
  Vue.component(name, components[name]);
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
