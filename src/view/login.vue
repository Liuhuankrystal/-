<template>
<div class="header">
  <div class="headerTop">
    <div class="titWord">这里是您的开始</div>
    <div class="titRight">
      <div class="inputName">
        <input v-model="input" placeholder="姓名/邮箱"/>
      </div>
      <div class="inputPassWord">
        <input placeholder="密码" v-model="input" show-password/>
      </div>
      <div class="question">?</div>
      <div class="loginBtn">登录</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import '../assets/css/index.less';
.header{
  widows: 140px;
  background: #F8F8F8;
}
.headerTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px ;
  margin: 0 auto;
  padding: 13px 0;

}

.titWord {
  // color: #45453f;
  color: @colorWord;
  font-size: 20px;
}
.titRight {
  .displayflexflex-end
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
.inputPassWord input{
  text-indent: 10px;
 
}

.question {
  color: #f31e78;
 margin-right: 19px;
}
.loginBtn{
  width:152px;
height:38px;
line-height: 38px;
text-align: center;
color: #F31E78;
background:#fff;
border:1px solid rgba(243,30,120,1);
border-radius:10px;

}
</style>
