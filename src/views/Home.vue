<template>
    <div class="mobile">
        <!-- <header>
            <MyHeader />
            <Logo></Logo>
            <MyNaV />
        </header>
        <main class="wrapper">
          
            <re-ying :num="num" @scollChange="changeScoll" class="reyin"></re-ying>
        </main>  -->
        <router-view></router-view>
        <footer><myFooter /></footer>
    </div>
</template>
<script>
import myFooter from '../components/home/MyFooter';
// import BScroll from 'better-scroll';

export default {
    data() {
        return {
            // num: 12,
        };
    },
    components: {
        myFooter,
    },
    methods: {
        // initNormalY() {
        //     if (!this.scrollY) {
        //         this.scrollY = new BScroll('.wrapper', {
        //             scrollX: false,
        //             scrollY: true,
        //             click: true,
        //             pullUpLoad: {
        //                 threshold: -50, // 当上拉距离超过30px时触发 pullingUp 事件
        //             },
        //         });
        //         let that = this;
        //         this.scrollY.on('pullingUp', () => {
        //             console.log('下拉完成');
        //             that.num++;
        //             this.scrollY.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        //             this.scrollY.refresh();
        //         });
        //     } else {
        //         this.scrollY.refresh();
        //     }
        // },
        // changeScoll(val) {
        //     console.log('reyin', val);
        //     this.$nextTick(function () {
        //         this.initNormalY();
        //     });
        // },
    },
};
</script>
<style lang="less" scoped>
.mobile {
    height: 100vh;
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    position: relative;

    footer {
        width: 100%;
        height: 50px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
