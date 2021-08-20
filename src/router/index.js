import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            { path: '/home', redirect: '/home/movie' },
            {
                path: '/home/movie',
                component: () => import('../views/home/movie.vue'),
                children: [
                    { path: '/home/movie', redirect: '/home/movie/hot' },
                    {
                        path: '/home/movie/hot',
                        component: () => import('../views/movies/hot.vue'),
                    },
                    {
                        path: '/home/movie/cinema',
                        component: () => import('../views/movies/cinema.vue'),
                    },
                    {
                        path: '/home/movie/wait',
                        component: () => import('../views/movies/wait.vue'),
                    },
                    {
                        path: '/home/movie/classic',
                        component: () => import('../views/movies/classic.vue'),
                    },
                ],
            },
            {
                path: '/home/video',
                component: () => import('../views/home/video.vue'),
            },
            {
                path: '/home/shortVideo',
                component: () => import('../views/home//shortVideo.vue'),
            },
            {
                path: '/home/show',
                component: () => import('../views/home/show.vue'),
            },
            {
                path: '/home/mine',
                component: () => import('../views/home/mine.vue'),
            },
        ],
    },

    {
        path: '/xianqin/:movieId',
        name: 'XianQin',
        component: () => import('../views/XianQin.vue'),
        props: true,
    },
    {
        path: '/city_list',
        component: () => import('../views/CityList.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
