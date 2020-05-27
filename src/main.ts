import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAudioMotionAnalyzer from 'vue-audiomotion-analyzer'
import MainAudio from "@/core/mainaudio";

Vue.config.productionTip = false
Vue.use(VueAudioMotionAnalyzer)

Vue.prototype.$mainAudio = new MainAudio()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
