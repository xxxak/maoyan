<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
// import Home from './views/Home';
export default {
    data() {
        return {};
    },
    components: {
        // Home,
    },
    mounted() {},
};
</script>
<style lang="less" scoped>
.red {
    width: 300px;
    height: 300px;
    background: bisque;
}
.app {
    background-color: #f5f5f5;
}
</style>
