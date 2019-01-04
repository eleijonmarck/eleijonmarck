import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import VueMarkdown from 'vue-markdown'
import PostDetail from './PostDetail.vue'
import Blog from './components/blog/blog.vue'

// ENABLE SINGLE PAGE APP ROUTING
const routes = [
  { path: '/', component: Blog },
  { path: '/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode:'history',
  routes
})

// Enable use of 3rd party plugins
Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueMarkdown);
Vue.use(VueRouter);

// init app
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
