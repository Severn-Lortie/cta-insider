import Vue from 'vue'
import Router from 'vue-router'

import FrontPage from '../views/FrontPage';
import ArticlePage from '../views/ArticlePage';
import SectionPage from '../views/SectionPage';
import AdminPage from '../views/AdminPage'

Vue.use(Router)

export default new Router({
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
            path: '/article/:section/:number',
            component: ArticlePage,
            props: true
        },
        {
            path: '/section/:sectionPath',
            component: SectionPage,
            props: true
        },
        {
            path: '/admin',
            component: AdminPage
        }
    ]
})
