import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAudioMotionAnalyzer from 'vue-audiomotion-analyzer'

Vue.config.productionTip = false
Vue.use(VueAudioMotionAnalyzer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
