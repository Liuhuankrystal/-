<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <div class="recommendOne">
        <ul>
          <li>
            <div class="topImg">
              <div class="left">
                <el-image
                  style="width: 438px; height: 438px"
                  src="../../static/img/sl.jpg"
                  :fit="cover"
                ></el-image>
              </div>
              <div class="center">
                <div class="top">
                  <el-image
                    style="width: 222px; height: 216px"
                    src="../../static/img/forget.png"
                    :fit="cover"
                  ></el-image>
                </div>
                <div class="bottom">
                  <el-image
                    style="width: 222px; height: 216px"
                    src="../../static/img/head.png"
                    :fit="cover"
                  ></el-image>
                </div>
              </div>
              <div class="right">
                <el-image
                  style="width: 438px; height: 438px"
                  src="../../static/img/head.png"
                  :fit="cover"
                ></el-image>
              </div>
            </div>

            <div class="wordCont">
              <div class="titAll">
                <div class="left">Hi , I am Stephanie Danielle , Call me Stephanie.</div>
                <div class="right">
                  <div class="iconAll">
                    <router-link to="/" class="icon"></router-link>
                    <router-link to="/" class="word" style="margin-right:30px">Link</router-link>

                    <router-link to="/" class="icon"></router-link>
                    <router-link to="/" class="word">Follow</router-link>
                  </div>
                </div>
              </div>
              
              <!--  -->
              <div class="name">Bukin · 互联网产品经理执行</div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">Live in 四川 成都 from China.</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">Occupation or research field is 互联网产品设计</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">成都创建Woshuoxia</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">Live in 四川 成都 from China.</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">
                  <router-link to>marijatiurina.com</router-link>can find me.
                </div>
              </div>

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
  name: "recommend",
  data() {
    return {
      "": ""
    };
  },
  created() {},
  //方法定义
  methods: {}
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
.recommendOne {
  margin-top: 22px;
  ul {
    li {
      margin-bottom: 66px;
      background: #fff;
      .topImg {
        .flexStart;
        .left {
          width: 438px;
          height: 438px;
        }
        .center {
          width: 222px;
          height: 436px;
          padding: 0 1px;
          .top {
          }
          .bottom {
            padding-top: 1px;
          }
        }
        .right {
          width: 438px;
          height: 438px;
        }
      }
    }
  }
}

.wordCont {
  background: #fff;
  padding: 24px;
  .titAll {
    .flexSBetween;
    .left {
      color: #1c1c1c;
      font-size: 24px;
      font-weight: bold;
      width: 80%;
      .oneLines;
    }

    .right {
      .iconAll {
        .flexStart;
        margin-left: 30px;

        .icon {
          width: 18px;
          height: 18px;
          background: #c6c6c6;
          margin-right: 12px;
        }
        .word {
          color: #187eb9;
          font-size: 16px;
        }
      }
    }
  }

  .name {
    color: #7f7f7f;
    font-size: 16px;
    padding: 13px 0 20px 0;
  }
  .message {
      .flexStart;
    margin-bottom: 16px;
    .icon {
        background: #c6c6c6;
      width: 20px;
      height: 20px;
      margin-right: 22px;
    }
    .word {
      color: #1d1d1d;
      font-size: 14px;
    }
  }
}
</style>