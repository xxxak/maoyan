import http from './http';

// 用于管理整个项目的所有接口
// 首页的受欢迎接口
export const ratedApi = params => http.get('/rated/list', params);

// 首页的电影列表接口
export const moviesApi = params => http.get('/movies/list', params);
//城市页面数据

export const areaApi = params => http.get('/area/list', params);
// 上拉加载接口
export const loadMoreApi = data => http.post('/movies/more', data);

// 详情页面数据
export const detailApi = data => http.post('/movies/detail', data);
