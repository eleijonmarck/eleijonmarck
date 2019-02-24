import Vue from 'vue'
import Router from 'vue-router'
import BlogDetail from '../components/blogdetail/blogdetail.vue'
import Blogs from '../components/blogs/blogs.vue'
import Homepage from '../components/Homepage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        { 
            path: '/blog', 
            name: 'Blogs',
            component: Blogs 
        },
        { 
            path: '/blog/:id', 
            name: 'BlogDetail',
            component: BlogDetail 
        }
    ]
})