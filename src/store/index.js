import Vue from 'vue';
import Vuex from 'vuex';
import { areaApi, ratedApi, moviesApi, loadMoreApi, detailApi } from '../utils/api';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: localStorage.getItem('city') || '杭州',
        cityList: [],
        hotCity: [],
        RateList: [],
        MoviesList: [],
        allMoreId: [],
        detail: [],
    },
    mutations: {
        // 改变选择的城市
        chanegCity(state, val) {
            state.city = val;
            localStorage.setItem('city', val);
        },
        // 获取城市信息
        getCity(state, res) {
            console.log(res);
            state.cityList = res.result.slice(1);
            state.hotCity = res.result[0].cities;
        },
        // 同步改变受欢迎列表
        getRatedList(state, res) {
            state.RateList = res.result;
            console.log('REATE', state.RateList);
        },
        // 同步获取更多电影
        getMoreMovie(state, res) {
            state.MoviesList = res.result;
            state.allMoreId = res.ids;
            console.log(state.allMoreId);
        },
        // 将下拉得来的更多电影数据拼接到MoviesList
        changemovieiList(state, val) {
            state.MoviesList = [...state.MoviesList.concat(val.result)];
        },
        // 获取详情页
        getDetail(state, val) {
            state.detail = val;
        },
    },
    actions: {
        // 异步请求城市信息
        async asyncgetCityList({ commit }) {
            const res = await areaApi();
            console.log(res);
            if (res.status === 0) {
                commit('getCity', res);
            }
        },
        // 异步获取好评电影列表
        async asyncgetRate({ commit }) {
            const res = await ratedApi();
            commit('getRatedList', res);
        },
        //异步获取更多电影
        async asyncgetMoreMovie({ commit }) {
            const res = await moviesApi();
            commit('getMoreMovie', res);
        },
        //异步下拉获取更多电影
        async asyncgetMoreMovies({ commit }, val) {
            const res = await loadMoreApi(val);
            commit('changemovieiList', res);
        },
        //异步获取详情页信息
        async asyncgetDetail({ commit }, val) {
            const res = await detailApi(val);
            commit('getDetail', res.result);
        },
    },
    modules: {},
});
