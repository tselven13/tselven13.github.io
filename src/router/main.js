import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue'; 
import Portfolio from '../views/Portfolio.vue';
import Contact from '../components/Contact.vue';
import Resume from '../components/Resume.vue';
import Skills from '../components/Skills.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
        path:'/resume',
        name:'Resume',
        component: Resume
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/:pathMatch(.*)*', // Catch-all for undefined routes
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
