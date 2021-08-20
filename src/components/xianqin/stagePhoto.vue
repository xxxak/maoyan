<template>
    <!-- 剧照 -->
    <div class="stagePhoto">
        <p class="title">
            <i>剧照</i>
            <span>展开</span>
        </p>
        <div class="warpper2">
            <ul>
                <li v-for="item in stagePhotoList" :key="item">
                    <img :src="item.replace('/w.h', '/140.96')" alt="" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    props: ['detail'],
    data() {
        return {
            active: true,
            stagePhotoList: [],
            sc: '',
        };
    },
    watch: {
        detail: async function () {
            if (this.detail.photos) {
                this.stagePhotoList = this.detail.photos;
                await this.$nextTick(function () {
                    // console.log(this.detail);
                    console.log(1, document.querySelector('.warpper2 ul').offsetWidth);
                });

                setTimeout(() => {
                    console.log(2, document.querySelector('.warpper2 ul').offsetWidth);
                    this.initScoll();
                }, 500);
            }
        },
    },
    computed: {},
    methods: {
        changeHeight() {
            this.active = !this.active;
            this.thisHeight = this.thisHeight == '75px' ? '150px' : '75px';
        },
        initScoll() {
            if (!this.sc) {
                console.log('初始化');
                this.sc = new BScroll('.warpper2', {
                    scrollX: true,
                    scrollY: false,
                    click: true,
                });
            } else {
                this.sc.refresh();
            }
        },
        imgload() {
            console.log(3, document.querySelector('.warpper2 ul').offsetWidth);
        },
    },
    // mounted() {
    //     this.initScoll();
    // },
    // updated() {
    //     this.initScoll();
    // },
};
</script>
<style lang="less" scoped>
@import '../../assets/css/var.less';
.stagePhoto {
    .title {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
        span {
            font-size: 12px;
        }
    }
    p {
        color: white;
        font-size: 15px;
    }
    .warpper2 {
        width: 100%;
        overflow: hidden;
        ul {
            // width: 1200px;
            display: inline-flex;

            li {
                padding-right: 10px;
            }
        }
    }
}
</style>
