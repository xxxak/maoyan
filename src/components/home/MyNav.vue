<template>
    <div class="box">
        <div class="map" @click="gotoCity"><span>杭州</span></div>
        <ul>
            <li v-for="(item, index) in taps" :key="item[0]" @click.prevent="changeSty(index, $event)">
                <router-link :to="item[1]" :class="{ isColor: iscolor == index }">{{ item[0] }}</router-link>
            </li>
            <span :style="{ left: `${tapLeft}px` }"></span>
        </ul>
        <div class="search"><i class="iconfont icon-sousuo"></i></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            taps: [
                ['热映', '/home/movie/hot'],
                ['影院', '/home/movie/cinema'],
                ['待映', '/home/movie/wait'],
                ['经典电影', '/home/movie/classic'],
            ],
            tapLeft: sessionStorage.getItem('tapLeft') | 8,
            iscolor: sessionStorage.getItem('iscolor') | 0,
        };
    },
    watch: {
        $route(val) {
            console.log(val);
            this.taps.forEach((item, index) => {
                if (item[1] == this.$route.path) {
                    this.iscolor = index;
                    this.tapLeft = index == 3 ? 210 : 10 + index * 60;
                    sessionStorage.setItem('tapLeft', this.tapLeft);
                    sessionStorage.setItem('iscolor', this.iscolor);
                }
            });
        },
    },
    methods: {
        changeSty(index, $event) {
            console.log(index);
            this.iscolor = index;
            this.tapLeft = $event.target.offsetLeft + $event.target.offsetWidth / 2 - 10;
            sessionStorage.setItem('tapLeft', this.tapLeft);
            sessionStorage.setItem('iscolor', this.iscolor);
        },
        gotoCity() {
            this.$router.push('/city_list');
        },
    },
    mounted: function () {
        this.taps.forEach(item => {
            if (item[1] == this.$route.path) {
                this.active = item.index;
            }
        });
    },
};
</script>
<style lang="less" scoped>
@import '../../assets/css/var.less';
.box {
    background: white;
    display: flex;
    justify-content: space-between;
    height: 45px;
    border-bottom: 1px solid #e8e8e8;
    .map {
        .center();
        padding: 0 10px;
        span {
            font-size: 15px;
            color: #666;
        }
    }
    ul {
        display: flex;
        position: relative;
        li {
            font-size: 15px;
            text-align: center;
            font-weight: 700;
            .center();
            padding-right: 20px;
            &:nth-of-type(4) {
                padding-right: 0;
                a {
                    width: 80px;
                }
            }
            a {
                width: 40px;
                display: block;
                color: #666;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
        }
        span {
            display: block;
            position: absolute;
            bottom: 1px;
            width: 20px;
            width: 5.33333vw;
            border-radius: 1px;
            height: 3px;
            background-color: #f03d37;
            -webkit-transition: left 0.2s;
            transition: left 0.2s;
            left: var(--tapLeft);
            // left: 100px;
        }
    }
    .search {
        .center();
        padding: 0 10px;
        i {
            color: #f03d37;
            font-size: 18px;
            font-weight: 700;
        }
    }
}
.isColor {
    font-size: 17px;
    color: #333 !important;
}
</style>
>
