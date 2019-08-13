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
        <div class="back">返回</div>
        <div class="phoneImg"></div>
        <div class="tips">添加个人形象照 拷贝</div>
        <div class="sureButton">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
body {
  background: #474747;
}
.uploadPhoto {
  .displayflexSpace-between;
  .uploadPhotoImg {
    position: relative;
    img {
      width: 600px;
      height: 600px;
    }
    .addReduce {
      position: absolute;
      width: 90%;
      margin: 0 auto;
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
    }
    .phoneImg {
      width: 140px;
      height: 140px;
      margin: 76px auto 59px auto;
      .border-radius(50%);
    }
    .tips {
      color: #bbbbbb;
      font-size: 18px;
      margin-bottom: 183px;
    }
    .sureButton {
      width: 35px;
      height: 18px;
      font-size: 18px;
      line-height: 18px;
      background: #0a7ddf;
      .border-radius(10px);
    }
  }
}
</style>