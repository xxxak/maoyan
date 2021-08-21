<template>
    <div class="reying">
        <div class="contain">
            <!-- 最受好评 -->
            <div class="haopingMovie">
                <p class="title">最受好评电影</p>
                <div class="haoingList wrapper1">
                    <ul class="thisul" @click="initNormal">
                        <li v-for="item in RateList" :key="item._id" @click.prevent="">
                            <a href="">
                                <div class="movieImg">
                                    <img :src="item['imgUrl']" alt="#" />
                                    <div class="shodow">
                                        <span v-if="item.score">观众评分: {{ item.score }}</span>
                                        <span v-else>{{ item.wishNum }}人想看</span>
                                    </div>
                                </div>
                                <p>{{ item['title'] }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 更多电影 -->
            <div class="moreMovies">
                <div
                    class="moreMovieItem"
                    v-for="(item, index) in MoviesList"
                    :key="index"
                    @click="gotoDetail(item.movieid)"
                >
                    <div class="moreMvImg">
                        <img :src="item['img'].replace('/w.h', '')" alt="#" />
                    </div>
                    <div class="moreMvMsg">
                        <p class="moviesName">
                            {{ item['nm'] }}
                            <i :class="item.version | filterVersion"></i>
                        </p>
                        <p class="score">
                            <i v-if="item.sc != 0">观众评分{{ item['sc'] }}</i>
                            <span v-else>目前暂无评分</span>
                        </p>
                        <p class="start">主演 :{{ item['star'] }}</p>
                        <p class="showInfo">{{ item['showInfo'] }}</p>
                    </div>
                    <div class="goupiao">
                        <span>购票</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            thisallid: [],
            num: 12,
        };
    },
    watch: {
        num: function () {
            if (this.num <= 32) {
                let str = this.allMoreId.slice(this.num, this.num + 1).toString();
                // 下拉加载新数组
                this.asyncgetMoreMovies({ ids: str });
            }
        },
    },
    mounted() {
        this.asyncgetMoreMovie().then(() => {});
        this.asyncgetRate().then(() => {
            this.initNormal();
        });
        this.initNormalY();
    },
    computed: {
        ...mapState(['RateList', 'MoviesList', 'allMoreId']),
    },
    methods: {
        // 获取好评电影列表
        ...mapActions(['asyncgetRate', 'asyncgetMoreMovie', 'asyncgetMoreMovies']),
        gotoDetail(data) {
            this.$router.push('/xianqin/' + data);
        },
        initNormal() {
            console.log('initscoll');
            if (!this.scroll) {
                this.scroll = new BScroll('.wrapper1', {
                    scrollX: true,
                    scrollY: false,
                    click: true,
                });
            } else {
                this.scroll.refresh();
            }
        },
        initNormalY() {
            if (!this.scrollY) {
                this.scrollY = new BScroll('.reying', {
                    click: true,
                    pullUpLoad: {
                        threshold: -50, // 当上拉距离超过30px时触发 pullingUp 事件
                    },
                });
                this.scrollY.on('pullingUp', () => {
                    this.num++;
                    this.scrollY.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                    this.scrollY.refresh();
                });
            } else {
                this.scrollY.refresh();
            }
        },
    },
    filters: {
        // 2d 3d imax 标识
        filterVersion(val) {
            let x = { 'v2d imax': 'bk2dImax', 'v3d imax': 'bk3dImax', v3d: 'bk3d' };
            return x[val];
        },
    },
};
</script>
<style lang="less" scoped>
@import '../../assets/css/var.less';
.reying {
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.moreMovies {
    margin-top: 15px;
    .moreMovieItem {
        border-bottom: 1px solid #e8e8e8;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        .moreMvImg {
            width: 64px;
            height: 90px;
            background-color: rgb(187, 187, 187);
            img {
                width: 100%;
            }
        }
        .moreMvMsg {
            flex-grow: 1;
            margin-left: 5px;
            p {
                width: 222px;
                font-size: 13px;
                color: #777;
                padding-bottom: 8px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                i {
                    font-weight: 700;
                    color: #faaf00;
                    font-size: 15px;
                }
            }
            .moviesName {
                font-size: 17px;
                color: #333;
                font-weight: 700;
                i {
                    display: none;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: 14px;
                    width: 17px;
                }
                // .bknone {
                //     display: none;
                // }
                .bk3d {
                    display: inline-block;
                    background-image: url('../../assets/img/3d.png');
                    height: 14px;
                    width: 17px;
                }
                .bk2dImax {
                    display: inline-block;
                    background-image: url('../../assets/img/2dimax.png');
                    height: 14px;
                    width: 43px;
                }
                .bk3dImax {
                    display: inline-block;
                    background-image: url('../../assets/img/3dimax.png');
                    height: 14px;
                    width: 43px;
                }
            }
        }
        .goupiao {
            .center();
            span {
                display: block;
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                box-sizing: border-box;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                white-space: nowrap;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
}
.haopingMovie {
    height: 195px;
    background: white;
    width: 100%;
    padding: 15px;
    overflow: hidden;
    .title {
        font-size: 14px;
        color: #333;
        margin-bottom: 12px;
    }
    overflow: hidden;
    .haoingList {
        display: flex;
        width: 100%;
        height: 136px;
        width: 345px;
        overflow: hidden;

        ul {
            width: 1200px;
            display: flex;
            height: 136px;

            li {
                margin-right: 15px;
                width: 85px;
                .movieImg {
                    position: relative;
                    img {
                        height: 115px;
                        width: 85px;
                    }
                    .shodow {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 45px;
                        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
                        span {
                            display: block;
                            width: 100%;
                            position: absolute;
                            left: 4px;
                            bottom: 2px;
                            color: #faaf00;
                            font-size: 11px;
                            font-weight: 600;
                        }
                    }
                }
                p {
                    font-size: 13px;
                    color: #222;
                    margin-bottom: 3px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>
