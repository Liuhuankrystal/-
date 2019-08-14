<template>
  <div>
    <div class="header">
      <div class="headerTop">
        <div class="titWord">这里是您的开始</div>
        <div class="titRight">
          <div class="inputName">
            <input v-model="input" placeholder="姓名/邮箱" />
          </div>
          <div class="inputPassWord">
            <input placeholder="密码" v-model="input" show-password />
          </div>
          <div class="question">?</div>
          <div class="loginBtn">登录</div>
        </div>
      </div>
    </div>
    <div class="loginbg w1100">
      <div class="left">
        <div class="leftTitWord">连接你感兴趣的人或事，交流我和ta之间专属的一切。</div>
        <img src alt />
      </div>
      <div class="right">
        <div class="loginWord">
          “我说下”(woshuoxia)的设计初衷是为了提供给大家介绍
          自我、表达生活、高效工作和认识世界，并不是为了炫耀或
          者收纳粉丝自我表现的社交网站，我们关注每一个使用"我
          说下"(woshuoxia)服务的用户生计和发展，为您和连接者搭
          建良好的体验在努力持续的改进中，谢谢您对我们的支持！
        </div>
        <div class="loginInput">
          <input type="text"  v-model="name" placeholder="真实姓名" />
        </div>
         <div class="loginInput">
          <input type="text" v-model="email" placeholder="常用邮箱" />
        </div>
        <div class="loginInput">
          <input type="password" v-model="passWord" placeholder="密码" />
        </div>
        <div class="loginButton">我要注册</div>

        <div class="tips">姓名请使用文字，大家都看得懂</div>
      </div>
    </div>

    <!-- <div style="height:64px"></div>  
    <div class="footer">woshuoxia&nbsp;&nbsp;2019</div> -->
    <footer></footer>

  </div>
</template>

<script>
import footer from '../components/footer'
export default {
  name: "App",
  data() {
    return {
      name: '',
      email:'',
      passWord:'',
    }
  },
  components:{
    footer
  }
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
.header {
  widows: 140px;
  background: #f8f8f8;
}
.headerTop {
  .flexSBetween;
  width: 1100px;
  margin: 0 auto;
  padding: 13px 0;
}

.titWord {
  // color: #45453f;
  color: @colorWord;
  font-size: 20px;
}
.titRight {
  .flexEnd;
}

.inputName,
.inputPassWord {
  width: 240px;
  height: 38px;
  line-height: 38px;
  width: 100%;
  margin-right: 28px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(219, 219, 219, 1);
  .border-radius(5px);
}
.inputName input,
.inputPassWord input {
  text-indent: 10px;
}

.question {
  color: #f31e78;
  margin-right: 19px;
}
.loginBtn {
  width: 152px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #f31e78;
  background: #fff;
  border: 1px solid rgba(243, 30, 120, 1);
  border-radius: (10px);
}
.loginbg {
  .flexStart;
  margin-top: 48px;
  .left {
    width: 693px;
    height: 510px;
    position: relative;
    margin-bottom: 65px;
    .leftTitWord {
      .positionAT(63px,28px);
      font-size: 20px;
      font-weight: bold;
      color: #1d1d1d;
    }
  }
  .right {
    width: 416px;
    margin-left: -125px;
    margin-top: -10px;
    .loginWord {
      color: #1d1d1d;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    .loginInput {
      width: 398px;
      height: 58px;
      border: 1px solid #DBDBDB;
      margin-bottom: 36px;
      .flexStart;
      .border-radius(10px);
      input {
        color: #757575;
        font-size: 14px;
        text-indent: 20px;
      }
    }
    .loginInput:last-child{
      margin-bottom: 0;
    }
    .loginButton {
      width: 166px;
      height: 48px;
      line-height:48px;
      margin-top: 48px;
      margin-left: 155px;
      color: #2D2D2D;
      text-align: center;
      border: 1px solid #DBDBDB;
      .border-radius(10px);
    }
    .tips{
      width: 376px;
      height: 33px;
      line-height: 33px;
      color: #7F7F7F;
      font-size: 14px;
      text-align: center;
      background: #F8F8F8;
      margin-top: 16px;
        margin-left: 11px;
    }
  }
}

.footer{
  height:64px;
  line-height: 64px;
  background:#F8F8F8;
  text-align: center;

  .positionFixedB;
}
</style>

