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

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err);
};
router.beforeEach((to, from, next) => {
    if (to.path == '/home/show') {
        alert('你没有权限哦');
        sessionStorage.setItem('active', 0);
        next('/home/movie');
    } else {
        next();
    }
});
export default router;
