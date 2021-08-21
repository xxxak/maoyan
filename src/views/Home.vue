<template>
    <div class="mobile">
        <router-view></router-view>
        <footer><myFooter /></footer>
    </div>
</template>
<script>
import myFooter from '../components/home/MyFooter';

export default {
    components: {
        myFooter,
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
