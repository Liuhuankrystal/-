<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <div class="keyword">
        <ul class="BasicCont">
          <li class="top">
            <span class="left">搜索到您的关键词：</span>
            <div class="right">
              <router-link to="/infoEditInfo" class="back">返回个人设定</router-link>
              <div class="save">保存</div>
            </div>
          </li>
        </ul>

        <div class="keyWord">
          <router-link to='' class="keys" v-for="item in 50" :key='item'>K*产品设计</router-link>
        </div>
      </div>
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
.keyword{
  background: #fff;
  padding: 20px;
  margin-top: 44px;
}
.BasicCont {
  li {
    .flexStart;
    padding: 20px 0;
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

.keyWord {
  padding:20px;
  background: #f3f3f3;
  line-height:30px;
  .keys{
    color: #1d1d1d;
    font-size: 17px;
    margin-right: 10px;
    font-weight: bold;

  }
}
</style>