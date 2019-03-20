import Vue from 'vue'
import App from './App.vue'

// 全局引用 axios vue-axios vue-cookies
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'vue-cookies'

// 全局配置 原型 ,其他的的vue组件中,可以通过 this.axios 或者 this.cookies 来使用
Vue.prototype.axios = Axios;
Vue.prototype.cookies = Cookies;



Vue.config.productionTip = false

// 初始化默认header
//Axios.defaults.headers.common 写了这个之后,接口要支持跨域
Axios.defaults.headers.common['Authorization'] = 'test';
Axios.defaults.headers.common['token'] =  Cookies.get('token');
//关于 cookie的文章参考 https://www.jianshu.com/p/535b53989b39

new Vue({
  render: h => h(App),
}).$mount('#app')
