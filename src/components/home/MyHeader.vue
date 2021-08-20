<template>
  <div class="header">
    <p>猫眼电影</p>
    <div class="right-memu">
      <img src="../../assets/img/menu.png" alt="" @click="ishow = !ishow" />
      <div v-bind:class="{ show: ishow, submenu: true }" class="">
        <a href="">首页</a>
        <a href="">榜单</a>
        <a href="">热点</a>
        <a href="">商城</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ishow: true,
    };
  },
  methods: {},
  // watch: {
  //     ishow: function () {
  //         console.log(this.ishow);
  //     },
  // },
};
</script>
<style lang="less" scoped>
.header {
  height: 50px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
  z-index: 100;
  p {
    text-align: center;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
  }
  .right-memu {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 17px;
      height: 16px;
    }
    .submenu {
      position: absolute;
      right: 1px;
      text-align: center;
      a {
        display: block;
        width: 110px;
        color: #333;
        font-size: 15px;
        line-height: 45.5px;
        background: white;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
      }
    }
  }
}
.show {
  display: none;
}
</style>
