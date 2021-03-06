import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/works',
            name: 'works',
            component: Works
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/blog/:english_title',
            name: 'detail',
            component: Detail
        },
        {
            path: '*',
            name: 'error',
            component: NotFound
        }
    ]
})