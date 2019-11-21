import Vue from 'vue'
import Router from 'vue-router'
import fb from '../firebaseConfig'

import FrontPage from '../views/FrontPage';
import ArticlePage from '../views/ArticlePage';
import SectionPage from '../views/SectionPage';
import AdminPage from '../views/AdminPage';
import LoginPage from '../views/LoginPage';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/frontpage'
        },
        {
            path: '/frontpage',
            component: FrontPage
        },
        {
            path: '/article/:sectionId/:articleId',
            component: ArticlePage,
            props: true
        },
        {
            path: '/section/:id',
            component: SectionPage,
            props: true
        },
        {
            path: '/admin',
            component: AdminPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: LoginPage
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth.currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;
