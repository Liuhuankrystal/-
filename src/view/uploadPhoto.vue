<template>
  <div>
    <div class="w1100 uploadPhoto">
      <div class="uploadPhotoImg">
        <img src alt />
        <div class="addReduce">
          <div class="add">+</div>
          <div class="line"></div>
          <div class="Reduce">-</div>
        </div>
      </div>
      <div class="right">
        <div class="back" @click="back()">返回</div>
        <div class="phoneImg"></div>
        <div class="tips">添加个人形象照 拷贝</div>
        <div class="sureButton gery">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#474747");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    }
};
</script>

<style lang="less" scoped>
@import "../assets/css/index.less";
body {
  background:#474747;
}
.uploadPhoto {
  margin-top: 48px;
  .flexSBetween;
  .uploadPhotoImg {
    position: relative;
    img {
      width: 600px;
      height: 600px;
    }
    .addReduce {
      .positionALB(76px, 26px);
      width: calc(100% -76px);
      margin: 0 auto;
      .flexSBetween;
      .add,
      .Reduce {
        width: 32px;
        height: 32px;
      }
      .line {
        background: #9d9d9d;
        width: 347px;
        height: 8px;
        margin: 0 20px;
        .border-radius(4px);
      }
    }
  }
  .right {
    .back {
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
    .phoneImg {
      width: 140px;
      height: 140px;
      background: #5b5b5b;
      margin: 76px auto 59px auto;
      .border-radius(50%);
      cursor: pointer;
    }
    .tips {
      color: #bbbbbb;
      font-size: 18px;
      margin-bottom: 183px;
    }
    .sureButton {
      text-align: center;
      width: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      .border-radius(10px);
    }
    .sureButton.gery {
      background: #636464;
      color: #063e6d;
      margin: 0 auto;
    }
    .sureButton.blue {
      background: #0A7DDF;
      color: #fff;
    }
  }
}
</style>