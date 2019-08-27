<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style  lang='less'  rel="stylesheet/less">
@import './assets/css/index.less';
#app {
   font-family:Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background: #CBCBCB;
}

</style>
