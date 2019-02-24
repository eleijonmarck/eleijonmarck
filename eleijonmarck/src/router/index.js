import Vue from 'vue'
import Router from 'vue-router'
import BlogDetail from '../components/BlogDetail/BlogDetail.vue'
import Blog from '../components/Blog/Blog.vue'

Vue.use(Router)

export default new Router({
    routes: [
       { 
            path: '/blog', 
            name: 'Blog',
            component: Blog
        },
        { 
            path: '/blog/:id', 
            name: 'BlogDetail',
            component: BlogDetail 
        }
    ]
})