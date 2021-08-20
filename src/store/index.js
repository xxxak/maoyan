import Vue from 'vue';
import Vuex from 'vuex';
// import { citiesApi, ratedApi } from '../utils/api';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: localStorage.getItem('city') || '杭州',
    },
    mutations: {
        // 改变选择的城市
        chanegCity(state, val) {
            state.city = val;
            localStorage.setItem('city', val);
        },
        // 同步改变受欢迎列表
        getRatedList(state, padload) {
            state.ratedList = padload;
        },
    },
    actions: {},
    modules: {},
});
