<template>
    <div class="movie-info-top">
        <div class="poster">
            <img :src="detail.img | filterPoster" alt="" />
        </div>
        <div class="movie-desc">
            <h1>{{ detail.nm }}</h1>
            <p>{{ detail.enm }}</p>
            <p>
                {{ detail.cat | filtersAdd }}
                <i></i>
            </p>
            <p>{{ detail.star | filtersAdd }}</p>
            <p>{{ detail.pubDesc }}</p>
            <div class="btns">
                <span class="wantWatch">想看</span>
                <span class="Watched">看过</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['detail'],
    data() {
        return {};
    },
    filters: {
        filterPoster(val) {
            if (val) {
                return val.replace('/w.h', '/100.138');
            }
        },
        filtersAdd(val) {
            if (val) {
                return val.split(',').join(' / ');
            }
        },
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {},
};
</script>
<style lang="less" scoped>
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
</style>
