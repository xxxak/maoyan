<template>
    <div>
        <header>
            <MyHeader />
            <Logo></Logo>
            <MyNaV />
        </header>
        <main class="wrapper">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
    </div>
</template>

<script>
import MyHeader from '../../components/home/MyHeader';
import Logo from '../../components/home/Logo';
import MyNaV from '../../components/home/MyNav';
export default {
    components: { MyHeader, Logo, MyNaV },
};
</script>
<style lang="less" scoped>
main {
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    position: absolute;
    top: 155px;
    bottom: 50px;
    left: 0;
    right: 0;
}
header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 155px;
}
</style>
