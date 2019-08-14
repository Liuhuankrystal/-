<template>
<div>
  <div style="height:64px"></div>
  <div class="footer">woshuoxia&nbsp;&nbsp;2019</div>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/css/index.less";
.footer{
  height:64px;
  line-height: 64px;
  background:#F8F8F8;
  text-align: center;

  .positionFixedB;
}
</style>