<template>
  <div class="forgetPW">
    <img class="bgImg" src="../../static/img/forget.png" alt />

    <div class="cont" v-if="view_type == 1">
      <div class="emailInput">
        <input type="text" v-model="email" placeholder="请输入您的注册邮箱…" />
      </div>

      <div class="Btn cursor" @click="sendEmail()">
        <p>完成</p>
      </div>
    </div>

    <div class="cont" v-else-if="view_type == 2">
        <div class="text">
          申请找回密码的请求已发送您的邮箱中，请查收并设置新密码，
          祝今天开心愉快！
        </div>
      <div class="emailInput">
        <input type="text" v-model="code" placeholder="请输入您邮箱中接收到的验证码" />
      </div>
      <div class="emailInput">
        <input type="password" v-model="password" placeholder="请输入新密码" />
      </div>

      <div class="Btn cursor" @click="onSub()">
        <p>完成</p>
      </div>
    </div>

    <div class="cont" v-else-if="view_type == 3">
      <div class="text">
        您已修改成功新密码，请开始登录，使用Woshuoxia的服务，祝你开心！
      </div>
    </div>
    <div class="loginWord cursor" @click="$router.go(-1)">我要登录</div>
  </div>
  
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                email:'',
                code:'',
                password:'',
                view_type:1,
            };
        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#fff");
        },
        methods:{
            //发送验证码到邮件
            sendEmail(){
                let _this = this;
                _this.common.request('api/user/forgetPassword',{email: _this.email},function (res) {
                    if(res.status == 200){
                        _this.$message({
                            message: res.message,
                            type: 'success',
                            duration: 2500,
                            center: true
                        });
                        _this.view_type=2;
                    }
                },'post');
            },
            onSub(){
                let _this = this;
                _this.common.request('api/user/resetPassword',{email: _this.email,code:_this.code,password:_this.password},function (res) {
                    if(res.status == 200){
                        _this.$message({
                            message: res.message,
                            type: 'success',
                            duration: 2500,
                            center: true
                        });
                        _this.view_type =3;
                    }
                },'post');
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/css/index.less";
.forgetPW {
  width: 600px;
  margin: 50px auto 0;
  .bgImg {
    width: 600px;
    height: 450px;
  }
  .cont {
    background: #f8f8f8;
    .emailInput {
      height: 56px;
      border-bottom: 1px solid #d6d6d6;
      input {
        color: #7f7f7f;
        font-size: 16px;
        text-align: center;
        height: 53px;
        background-color: #F8F8F8;
      }
    }
    .text{
      width: 70%;
      margin: 0 auto;
      font-size: 14px;
      text-align: center;
      font-weight:400;
      color:rgba(28,28,28,1);
      line-height:24px;
      padding: 20px 0;
    }
    .Btn {
      height: 56px;
      cursor: pointer;
      .flexSBetween;
      p {
        font-size: 16px;
        color: #fff;
        width: 72px;
        height: 30px;
        background: #188DDF;
        .border-radius(15px);
        text-align: center;
        line-height: 30px;
        margin: 0 auto;
      }
      p:hover{
        background: #8cc5ff;
      }
    }
  }
}
  .loginWord{
    width: 100%;
    font-weight:600;
    color:rgba(22,101,147,1);
    line-height:54px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  .loginWord:hover{
    text-decoration: underline;
  }
</style>