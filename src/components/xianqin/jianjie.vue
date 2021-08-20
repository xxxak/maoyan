<template>
    <!-- 简介 -->
    <div class="jianjie">
        <p class="title">
            <i>简介</i>
            <span v-if="active" @click="changeHeight">展开</span>
            <span v-else @click="changeHeight">收起</span>
        </p>
        <p
            class="shareInfo"
            :style="{
                height: thisHeight,
            }"
        >
            {{ content }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['detail'],
    data() {
        return {
            active: true,
            content: '',
            thisHeight: '75px',
        };
    },
    watch: {
        detail: function () {
            if (this.detail.shareInfo.content) {
                this.content = this.detail.shareInfo.content;
            }
        },
    },
    computed: {},
    methods: {
        changeHeight() {
            this.active = !this.active;
            this.thisHeight = this.thisHeight == '75px' ? '150px' : '75px';
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="less" scoped>
@import '../../assets/css/var.less';
.jianjie {
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
    .shareInfo {
        line-height: 26px;
        overflow: hidden;
    }
}
</style>
