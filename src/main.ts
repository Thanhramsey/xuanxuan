import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './styles/reset.css'
import Particles from "particles.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
declare module "particles.vue";
// @ts-ignore
import router from './router'
Vue.use(Vuetify)
Vue.use(Particles)
Vue.config.productionTip = false;


new Vue({
	// @ts-ignore
   router,
   vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
