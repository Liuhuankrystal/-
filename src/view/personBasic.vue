<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <ul class="BasicCont">
        <li class="top">
          <span class="left">个人基本</span>
          <div class="right">
            <router-link to="/infoEditInfo" class="back">返回个人设定</router-link>
            <div class="save">保存</div>
          </div>
        </li>
        <li>
          <span>您的真实姓名：</span>
          <div class="name">张伯卿</div>
        </li>
        <li>
          <span>常住城市：</span>
          <div></div>
        </li>
        <li>
          <span>个人网站：</span>
          <div></div>
        </li>
        <li>
          <span>一项成就荣耀：</span>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Topheader from "../components/header"; //上传图片
export default {
  components: {
    Topheader
  },
  name: "debut",

  data() {
    return {};
  }
};
</script>
<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
.BasicCont {
  background: #fff;
  padding: 0 20px;
  margin-top: 44px;
  li {
    .flexStart;
    padding: 20px 0;
    border-bottom: 1px solid #f3f3f3;
    span {
      color: #7f7f7f;
      font-size: 16px;
    }
    .right {
      .flexEnd;
      .back {
        color: #166593;
        font-size: 14px;
      }
      .save {
        color: #fff;
        font-size: 14px;
        width: 62px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background: #188ddf;
        .border-radius(13px);
        margin-left: 60px;
         cursor: pointer;
      }
    }
  }
  li.top {
    .flexSBetween;
  }
}
</style>