<template>
    <div class="mobile">
        <header>
            <Logo></Logo>
            <MyHeader />
        </header>
        <main></main>
    </div>
</template>
<script>
import MyHeader from '../../components/home/MyHeader';
import Logo from '../../components/home/Logo';
export default {
    data() {
        return {};
    },
    components: {
        MyHeader,
        Logo,
    },
};
</script>
<style lang="less" scoped>
.mobile {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    main {
        background-color: #f5f5f5;
        overflow: auto;
    }
    footer {
        height: 50px;
        background: red;
    }
}
</style>
