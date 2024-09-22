import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import NotFound from '../views/NotFound.vue'; 
import Portfolio from '../views/Portfolio.vue';
import Contact from '../components/Contact.vue';
import Pricing from '../components/Pricing.vue';
import Resume from '../components/Resume.vue';
import Skills from '../components/Skills.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs
    },
    {
        path: '/:pathMatch(.*)*', // Catch-all for undefined routes
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/portfolio',
        name:'Portfolio',
        component: Portfolio
    },
    {
        path:'/contact',
        name:'Contact',
        component: Contact
    },
    {
        path:'/pricing',
        name:'Pricing',
        component: Pricing
    },
    {
        path:'/resume',
        name:'Resume',
        component: Resume
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
