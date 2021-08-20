<template>
    <div class="pingfen">
        <!-- 头部 看过的人数 想看的人数 -->
        <div class="top">
            <div class="left">
                <img src="../../assets/img/logo-new.png" alt="" />
                <span>猫眼购票评分</span>
            </div>
            <div class="right">
                <div class="wanted">
                    <span>{{ detail.wish | filterAddDot }} 人想看</span>
                </div>
                <div class="watched">
                    <span>{{ detail.watched | filterAddDot }} 看过 ></span>
                </div>
            </div>
        </div>
        <!-- 中间 评分的分数 -->
        <div class="middle">
            <div class="left">
                <h1>{{ detail.sc }}</h1>
                <span>{{ detail.snum }} 人评</span>
            </div>
            <!-- 评分比例分布 -->
            <div class="moveScore">sfdsg</div>
            <div class="right">
                <div class="rank">
                    <span class="top">TOP</span>
                    <span class="rank-num">1</span>
                </div>
                <div class="desc">
                    <span class="first-word">2021年7月</span>
                    <span class="second-word">中国大陆票房榜</span>
                </div>
            </div>
        </div>
        <div class="bottom"></div>
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
        filterAddDot(val) {
            if (val) {
                val = val + '';
                return val
                    .split('')
                    .reverse()
                    .map((item, index) => {
                        if (index % 3 == 0 && index != 0) {
                            item = item + ',';
                        }
                        return item;
                    })
                    .reverse()
                    .join('');
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
.pingfen {
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 12px;
    width: 100%;
    height: 110px;
    margin-top: 15px;
    padding: 10px;

    .top {
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            span {
                font-size: 12px;
                color: #fff;
            }
            img {
                width: 15px;
                height: 15px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            width: 208px;
            justify-content: space-between;
            div {
                display: flex;
                align-items: center;

                span {
                    font-size: 12px;
                    color: #fff;
                    opacity: 0.6;
                }
            }
        }
    }
    .middle {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .left {
            display: flex;
            flex-direction: column;
            h1 {
                color: #ffb400;
                font-size: 26px;
                text-align: right;
                line-height: 26px;
            }
            span {
                font-size: 8px;
                color: #fff;
                opacity: 0.6;
            }
        }
        .moveScore {
            height: 50px;
            width: 110px;
            background-color: darkcyan;
        }
        .right {
            height: 50px;
            width: 40%;
            font-size: 12px;
            border: 1px solid #b49c70;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            .rank {
                border-radius: 5px;
                width: 27%;
                height: 100%;
                background: url('../../assets/img/top1-reputation.png') no-repeat 0 0 / cover;
                .top {
                    color: rgba(255, 229, 150, 0.7);
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin-top: 5px;
                    transform: scale(0.8);
                    font-weight: 700;
                }
                .rank-num {
                    color: #ffe186;
                    letter-spacing: 0;
                    text-align: center;
                    font-size: 14px;
                    display: block;
                    width: 100%;
                }
            }
            .desc {
                display: flex;
                flex-direction: column;
                .first-word {
                    color: #ffeec1;
                    opacity: 0.7;
                    font-size: 12px;
                    transform: scale(0.8);
                }
                .second-word {
                    width: 100%;
                    color: #fff4bd;
                    text-shadow: 0 1px 3px rgb(166 97 48 / 50%);
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
