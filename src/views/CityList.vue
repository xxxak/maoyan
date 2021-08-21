<template>
    <div class="area">
        <div class="hotCity">
            <p class="title">热门城市</p>
            <ul class="hot">
                <li v-for="item in hotCity" :key="item.cityId" @click="changeCity(item.name)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="List">
            <div v-for="item in cityList" :key="item.prefix">
                <p class="title">{{ item.prefix.toUpperCase() }}</p>
                <ul>
                    <li v-for="value in item.cities" :key="value.cityId" @click="changeCity(value.name)">
                        {{ value.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: { ...mapState(['cityList', 'hotCity']) },
    methods: {
        ...mapActions(['asyncgetCityList']),
        changeCity(val) {
            this.$store.commit('chanegCity', val);
            this.$router.push('/home');
        },
    },
    mounted() {
        this.asyncgetCityList();
    },
};
</script>
<style lang="less" scoped>
.title {
    background-color: #ebebeb;
    font-size: 14px;
    color: #333;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
}
.hot {
    overflow: hidden;
    li {
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 4%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
    }
}
</style>
