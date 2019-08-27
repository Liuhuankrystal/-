<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <div style="margin-top: 44px;">
        <ul class="BasicCont">
          <li class="top">
            <span class="left">向访问者展示</span>
            <div class="right">
              <router-link to="/infoEditInfo" class="back">返回个人设定</router-link>
              <div class="save">保存</div>
            </div>
          </li>
        </ul>
        <ul class="Cont">
          <li class="contSBetween">
            <div class="left">
              <div>您的职业/研究领域：</div>
              <div class="tips">用于搜索展示</div>
            </div>
            <div class="right">PM & Founder</div>
          </li>
          <li class="contSBetween">
            <div class="left">
              开始时间：
              <span>2010</span>
            </div>
          </li>
        </ul>

        <ul class="contOneLine">
          <li>
            <span class="left">技能快：</span>
            <div class="right">请在技能名称后使用 '2010(年份)，例如：营销'2010、PHP'2012；</div>
          </li>
        </ul>

        <ul class="Cont">
          <li class="contSBetween">
            <div class="left">
              <div>您的商务服务：</div>
              <div class="tips">用于搜索和推荐的展示</div>
            </div>
            <div class="right">PM & Founder</div>
          </li>
          <li class="contSBetween">
            <div class="left">
              开始时间：
              <span>2010</span>
            </div>
          </li>
        </ul>

         <ul class="contTwoLine">
          <li>
            <div class="left">
              <div>您的招呼语：</div>
              <div class="tips">用于推荐的展示</div>
            </div>
            <div class="right">PM & Founder</div>
          </li>
        </ul>

         <ul class="contThereLine">
          <li>
            <div class="left">
              <div>您的介绍语：</div>
              <div class="tips">用于推荐和个人主页的展示</div>
            </div>
            <div class="right">PM & Founder</div>
          </li>
        </ul>

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
  name: "personShowVisiters",

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

.Cont {
  background: #fff;
  padding: 0 20px;
  .flexSBetween;

  li {
    border-bottom: 1px solid #f3f3f3;
    padding: 20px 0;
    width: 48%;

  }
  li.contSBetween {
     height: 37px;
    display: flex;
    .left {
      color: #818181;
      font-size: 16px;
      margin-right: 10px;
      width: 155px;
     
      .tips {
        font-size: 12px;
      
      }
    }
    .right {
      .flexStart;
      color: #818181;
      font-size: 18px;
        margin-top: -12px;
    }
  }
}
.contOneLine {
  background: #fff;
  padding: 0 20px;

  li {
    .flexStart;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #f3f3f3;
    color: #818181;
    font-size: 16px;
  }
}

.contTwoLine{
    background: #fff;
 padding: 0 20px;

  li {
      padding: 20px 0;
    .flexStart;
    border-bottom: 1px solid #f3f3f3;
    color:#818181;
    font-size: 16px;
    .left{
       width: 155px;
           margin-right: 10px;
          .tips{
            font-size: 12px;
          }
    }
  }
}



.contThereLine{
    background: #fff;
 padding: 0 20px;

  li {
      padding: 20px 0;
    .flexStart;
    border-bottom: 1px solid #f3f3f3;
    color:#818181;
    font-size: 16px;
    .left{
       width: 155px;
           margin-right: 10px;
          .tips{
            font-size: 12px;
          }
    }
  }
}
</style>