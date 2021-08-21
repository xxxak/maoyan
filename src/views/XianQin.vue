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
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    components: { Logo, TopInfo, PingFen, JianJie, stagePhoto },
    computed: { ...mapState(['detail']) },
    methods: {
        guess() {
            this.$router.push('/xianqin/1282401');
        },
        async getData(newid) {
            const res = await detailApi({ id: newid ? newid : this.id });
            if (res.status === 0) {
                this.detail = res.result;
            }
        },
        ...mapMutations(['getDetail']),
        ...mapActions(['asyncgetDetail']),
    },
    async beforeRouteEnter(to, from, next) {
        const res = await detailApi({ id: to.params.movieId });
        next(vm => {
            vm.getDetail(res.result);
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.asyncgetDetail({ id: to.params.movieId });
        next();
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
