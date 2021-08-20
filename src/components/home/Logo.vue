<template>
  <section>
    <img :src="imgSrc" alt="" />
    <p>
      <span>发现最新最热电影</span>
      <i>打开app</i>
      <em class="iconfont icon-youjiantou"></em>
    </p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: require("../../assets/img/bigLogo.png"),
    };
  },
};
</script>
<style lang="less" scoped>
section {
  height: 60px;
  width: 100%;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #e8e8e8;
  z-index: 99;
  img {
    width: 94px;
    height: 39px;
  }
  p {
    height: 100%;
    display: flex;
    align-items: center;
    span {
      font-weight: 620;
      color: #666;
      font-size: 14px;
      margin-right: 10px;
    }
    i {
      font-weight: 700;
      font-size: 16px;
      font-family: PingFangSC-Medium, Arial, Helvetica, sans-serif;
      color: #b37e7e;
    }
    .icon-youjiantou {
      font-size: 12px;
      color: #b37e7e;
    }
  }
}
</style>
