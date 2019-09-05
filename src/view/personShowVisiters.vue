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
              <div class="save" @click="onSave()">保存</div>
            </div>
          </li>
        </ul>
        <ul class="Cont">
          <li class="contSBetween">
            <div class="left">
              <div>您的职业/研究领域：</div>
              <div class="tips">用于搜索展示</div>
            </div>
            <div class="right inputW">
              <input type="text" v-model="userInfo.zyly" placeholder="请输入您的职业/研究领域" />
            </div>
          </li>
          <li class="contSBetween">
            <div class="timeF">
              <div>开始年份：</div>
              <div>
                <el-date-picker value-format="yyyy" v-model="userInfo.zyly_year" type="year" placeholder="选择年份"></el-date-picker>
              </div>
            </div>
          </li>
        </ul>

        <ul class="contOneLine">
          <li>
            <span class="left">技能快：</span>
            <div class="right inputW">
              <input type="text" v-model="userInfo.jnk" placeholder="请输入技能快" />
            </div>
          </li>
        </ul>

        <ul class="Cont">
          <li class="contSBetween">
            <div class="left">
              <div>您的商务服务：</div>
              <div class="tips">用于搜索和推荐的展示</div>
            </div>
            <div class="right inputW">
              <input type="text" v-model="userInfo.swfu" placeholder="请输入您的商务服务" />
            </div>
          </li>
          <li class="contSBetween">
            <div class="timeF">
              <div>开始年份：</div>
              <div>
                <el-date-picker value-format="yyyy" v-model="userInfo.swfu_year" type="year" placeholder="选择年份"></el-date-picker>
              </div>
            </div>
          </li>
        </ul>

        <ul class="contTwoLine">
          <li>
            <div class="left">
              <div>您的招呼语：</div>
              <div class="tips">用于推荐的展示</div>
            </div>
            <div class="right inputW">
              <input type="text" v-model="userInfo.welcome" placeholder="请输入您的招呼语" />
            </div>
          </li>
        </ul>

        <ul class="contThereLine">
          <li>
            <div class="left">
              <div>您的介绍语：</div>
              <div class="tips">用于推荐和个人主页的展示</div>
            </div>
            <div class="right inputW">
              <input type="text" v-model="userInfo.introduce" placeholder="请输入您的介绍语" />
            </div>
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
    return {
        userInfo:{}
    };
  },
    created(){
      this.userInfo=this.$route.params;
    },
    methods:{
      onSave(){
          let _this=this;
          _this.common.request('api/user/upShowInfo',_this.userInfo,function (res) {
              if(res.status == 200){
                  _this.$message({
                      message: res.message,
                      type: 'success',
                      duration: 1500,
                      center: true,
                      onClose:function (res) {
                          _this.$router.go(-1);
                      }
                  });
              }
          },'post')
      }
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

    .inputW{
      width: calc(100% - 200px);
      input {
        width: 100%;
        color: #333;
        font-size: 14px;
      }
    }
    .timeF {
      .flexSBetween;
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
    .inputW{
      width: calc(100% - 200px);
      input {
        width: 100%;
        color: #333;
        font-size: 14px;
      }
    }
  }
}

.contTwoLine{
  background: #fff;
  padding: 0 20px;

  li {
    padding: 20px 0;
    .flexStart;
    border-bottom: 1px solid #f3f3f3;
    color: #818181;
    font-size: 16px;
    .left {
      width: 155px;
      margin-right: 10px;
      .tips {
        font-size: 12px;
      }
    }
    .inputW{
      width:calc(100% - 200px);
      input {
        width: 100%;
        color: #333;
        font-size: 14px;
      }
    }
  }
}

.contThereLine {
  background: #fff;
  padding: 0 20px;

  li {
    padding: 20px 0;
    .flexStart;
    border-bottom: 1px solid #f3f3f3;
    color: #818181;
    font-size: 16px;
    .left {
      width: 155px;
      margin-right: 10px;
      .tips {
        font-size: 12px;
      }
    }
    .inputW{
      width: calc(100% - 200px);
      input {
        width: 100%;
        color: #333;
        font-size: 14px;
      }
    }
  }
}
</style>