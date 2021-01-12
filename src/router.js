import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);


import Index from './components/Index.vue';
// import AboutMe from './components/AboutMe.vue';
// import Posts from './components/Posts.vue';
// import Post from './components/Posts/Post.vue'

const routes = [{
        path: '/',
        name: ['Index'],
        component: Index
    },
    // {
    //     path: '/AboutMe',
    //     alias: ['/AboutMe', '/SobreMi'],
    //     name: ['AboutMe', 'Sobre Mi'],
    //     component: AboutMe
    // },
    // {
    //     path: '/Posts',
    //     alias: ['/Posts', '/Publicaciones'],
    //     name: ['Posts', 'Novedades'],
    //     component: Posts
    // },
    // {
    //     path: '/Posts/:postName',
    //     component: Post
    // }
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;