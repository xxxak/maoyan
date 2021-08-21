<template>
    <div class="myfooter">
        <ul>
            <li
                v-for="(item, index) in footerItem"
                :key="index"
                :class="{ fontcolor: active == index }"
                @click="routerChange(item.index, item.toRouter)"
            >
                <span :class="['iconfont', item['icon']]"></span>
                <p>{{ item['title'] }}</p>
                <!-- <router-link :to="item['toRouter']" }>{{ item['toRouter'] }}</router-link> -->
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: sessionStorage.getItem('active') | 0,
            footerItem: [
                { title: '电影/影院', icon: 'icon-dianying', toRouter: '/home/movie/hot', index: 0 },
                { title: '视频', icon: 'icon-shipin', toRouter: '/home/video', index: 1 },
                { title: '小视频', icon: 'icon-shipin1', toRouter: '/home/shortVideo', index: 2 },
                { title: '演出', icon: 'icon-piaoquan', toRouter: '/home/show', index: 3 },
                { title: '我的', icon: 'icon-wode', toRouter: '/home/mine', index: 4 },
            ],
        };
    },
    watch: {
        $route() {
            // console.log(val);
            this.footerItem.forEach(item => {
                if (item.toRouter == this.$route.path) {
                    this.active = item.index;
                    sessionStorage.setItem('active', this.active);
                }
            });
        },
    },
    methods: {
        routerChange(index, topath) {
            this.active = index;
            sessionStorage.setItem('active', this.active);
            this.$router.push(topath);
        },
    },
    beforeUpdate: function () {
        this.footerItem.forEach(item => {
            if (item.toRouter == this.$route.path) {
                this.active = item.index;
            }
        });
    },
    mounted() {
        this.active = sessionStorage.getItem('active');
    },
};
</script>
<style lang="less" scoped>
@import '../../assets/css/var.less';
.myfooter {
    height: 75px;
    width: 100%;
    background: #fff;
    border-top: 0.5px solid #d8d8d8;
    ul {
        display: flex;
        .center();
        li {
            text-align: center;
            width: 20%;
            color: #696969;
            span {
                font-size: 23px;
            }
            p {
                font-size: 12px;
            }
        }
    }
}
.fontcolor {
    color: #f03d37 !important;
}
</style>
