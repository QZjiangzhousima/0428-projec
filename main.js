import Vue from 'vue'
import App from './App'
import store from './store/index.js';

//关闭Vue控制台警告
Vue.config.productionTip = false

//当前App组件代表整个应用,1)mp -> MINI PROGMESS  2)type ->类型
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
