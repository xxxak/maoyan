<template>
    <div class="xianqin" :style="{ backgroundColor: detail.backgroundColor ? detail.backgroundColor : '' }">
        <p @click="guess">ddd</p>
        <Logo></Logo>
        <div class="movie-info">
            <div class="path">
                <a href="">猫眼电影</a>
                &gt;
                <span>{{ detail.nm ? detail.nm : '' }}</span>
            </div>

            <top-info :detail="detail"></top-info>
            <ping-fen :detail="detail"></ping-fen>
            <JianJie :detail="detail"></JianJie>
            <stagePhoto :detail="detail"></stagePhoto>
        </div>
    </div>
</template>

<script>
import Logo from '../components/home/Logo.vue';
import TopInfo from '../components/xianqin/topinfo.vue';
import PingFen from '../components/xianqin/pingfen.vue';
import JianJie from '../components/xianqin/jianjie.vue';
import stagePhoto from '../components/xianqin/stagePhoto.vue';
import { detailApi } from '../utils/api';
export default {
    components: { Logo, TopInfo, PingFen, JianJie, stagePhoto },
    props: ['movieId'],
    data() {
        return {
            detail: {},
            moreUrL: 'http://www.pudge.wang:3080/api/movies/detail',
        };
    },

    methods: {
        guess() {
            this.$router.push('/xianqin/1282401');
        },
        async getData(newid) {
            const res = await detailApi({ id: newid ? newid : this.id });
            // console.log(res);
            if (res.status === 0) {
                this.detail = res.result;
            }
        },
        // 获取好评电影列表
        async getDetail(url, movieId) {
            await fetch(url, {
                body: JSON.stringify({ id: movieId }),
                headers: {
                    'content-type': 'application/json',
                },
                method: 'POST',
            })
                .then(response => response.json())
                .then(res => {
                    this.detail = res.result;
                });
        },
        fn(result) {
            this.detail = result;
        },
    },
    async beforeRouteEnter(to, from, next) {
        // console.log('触发了beforeRouteEnter', 'to:', to, 'from', from);

        const res = await detailApi({ id: to.params.movieId });
        next(vm => {
            vm.fn(res.result);
        });
        // ...
    },
    beforeRouteUpdate(to, from, next) {
        console.log('触发了beforeRouteUpdate', 'to:', to, 'from', from);
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        // 猜你喜欢场景
        console.log(to.params.movieId);
        this.getDetail(this.moreUrL, this.movieId);
        this.getData(to.params.movieId);

        next();
    },
    created() {},
    mounted() {
        // console.log('id', this.movieId);
        // this.$nextTick(() => {
        //     this.getDetail(this.moreUrL, this.movieId);
        // });
    },
};
</script>
<style lang="less" scoped>
.xianqin {
    background-color: #666;
    .path {
        font-size: 14px;
        color: #ccc;
        margin-bottom: 15px;
        a {
            font-size: 14px;
            color: #ccc;
        }
    }
    // 第一部分 电影基本信息
    .movie-info {
        padding: 21px 16px;
        .movie-info-top {
            display: flex;
            .poster {
                margin-right: 15px;
            }
            .movie-desc {
                width: 100%;
                font-size: 12px;
                color: #fff;
                p {
                    opacity: 0.6;
                }
                h1 {
                    font-size: 20px;
                    color: rgb(255, 255, 255);
                    margin-bottom: 15px;
                }

                .btns {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    span {
                        text-align: center;
                        line-height: 30px;
                        width: 45%;
                        display: block;
                        background: hsla(0, 0%, 100%, 0.35);
                        width: 110px;
                        height: 30px;
                        border-radius: 5px;
                        font-size: 14px;
                        color: white;
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>
