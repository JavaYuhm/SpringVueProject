import Vue from 'vue'
import App from './App.vue'
import './assets/css/login.css' // CSS 파일 등록

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')