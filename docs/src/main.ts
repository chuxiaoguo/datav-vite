import Vue from 'vue'
import App from './App.vue'
import datav from 'datav-vite';
import DataV from '@jiaminghi/data-view'

Vue.use(DataV)
Vue.use(datav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
