<template>
  <div class="forgetPW">
    <img class="bg" src alt />
    <div class="cont">
      <div class="emailInput">
        <input type="text" placeholder="您的注册邮箱…" />
      </div>

      <div class="Btn">
        <button>完成</button>
      </div>
    </div>
    <div class="loginWord">我要登录</div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/index.less";
.forgetPW {
  width: 600px;
  margin: 0 auto;
  .bg {
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
      }
    }
    .Btn {
      height: 56px;
      .flexSBetween;
      button {
        font-size: 16px;
        color: #fff;
        width: 72px;
        height: 30px;
        background: #188DDF;
        .border-radius(15px);
      }
    }
  }
}
</style>