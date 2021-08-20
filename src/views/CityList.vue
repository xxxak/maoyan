<template>
    <div class="citylIst">
        <div class="location">定位</div>
        <div class="hotCity">
            <p class="title">热门城市</p>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { areaApi } from '@/utils/api';
export default {
    components: {},
    props: {},
    data() {
        return {
            cityList: [],
        };
    },
    watch: {},
    computed: {},
    methods: {
        async getData() {
            const res = await areaApi();
            console.log(res);
            if (res.status == 0) {
                this.cityList = res.result;
            } else {
                console.log(res.msg);
            }
        },
    },
    created() {},
    mounted() {
        this.getData();
    },
};
</script>
<style lang="less" scoped></style>
