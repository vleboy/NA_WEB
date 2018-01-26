import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import store from '../../store'
import 'element-ui/lib/theme-default/index.css'
import '../../lib/jquery.min'
import '../../lib/jquery.fullPage.min'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
