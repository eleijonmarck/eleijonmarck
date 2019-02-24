import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'

import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

// Enable use of 3rd party plugins
Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueSimpleMarkdown);

import Router from './router/index'

// init app
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  render: h => h(App)
})
