<template>
    <div class="wrapper"><re-ying :num="num" @scollChange="changeScoll" class="reyin"></re-ying></div>
</template>

<script>
import ReYing from '../../components/home/ReYing';
import BScroll from 'better-scroll';
export default {
    components: { ReYing },
    props: {},
    data() {
        return {
            num: 12,
        };
    },
    watch: {},
    computed: {},
    methods: {
        initNormalY() {
            if (!this.scrollY) {
                this.scrollY = new BScroll('.wrapper', {
                    scrollX: false,
                    scrollY: true,
                    click: true,
                    pullUpLoad: {
                        threshold: -50, // 当上拉距离超过30px时触发 pullingUp 事件
                    },
                });
                let that = this;
                this.scrollY.on('pullingUp', () => {
                    console.log('下拉完成');
                    that.num++;
                    this.scrollY.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                    this.scrollY.refresh();
                });
            } else {
                this.scrollY.refresh();
            }
        },
        changeScoll() {
            this.$nextTick(function () {
                this.initNormalY();
            });
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="less" scoped></style>
