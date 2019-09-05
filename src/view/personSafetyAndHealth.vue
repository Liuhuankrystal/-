<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <ul class="BasicCont">
        <li class="top">
          <div class="left">
            账户
            <div class="tips">非本人操作请立即停止</div>
          </div>
          <div class="right">
            <router-link to="/infoEditInfo" class="back">返回个人设定</router-link>
            <div class="save" @click="onSave()">保存</div>
          </div>
        </li>
        <li>
          <span>
            您的邮箱：
            <br />
            <div class="tips">暂不提供修改服务</div>
          </span>
          <div class="name inputW">{{email}}</div>
        </li>
        <li>
          <span>登录密码：</span>
          <div class="pWord">
            <input type="text" v-model="uoPwd.passwordOld" placeholder="请输入您的登陆密码" />
          </div>
        </li>
        <li>
          <span>新密码：</span>
          <div class="pWord">
            <input type="text" v-model="uoPwd.password" placeholder="请输入新密码" />
            <div class="tipsWord">{{tipsWord}}</div>
          </div>
        </li>
        <li>
          <span>确认密码：</span>
          <div class="pWord">
            <input type="text" v-model="uoPwd.password_confirmation" placeholder="请输入重复密码" />
            <div class="tipsWord">
              <span class="tipsShow">请一定记得您的新密码，保存后下一次访问会需要您登陆。</span>
            </div>
          </div>
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
  name: "personSafetyAndHealth",

  data() {
    return {
        email:'',
      inputType: false,
      tipsWord: "新旧密码重复", //密码不可低于6位 //新密码
      tipsWordSure: "新密码不一致", //确认密码
      fixedWord: "修改",
        uoPwd:{
            passwordOld:'',
            password:'',
            password_confirmation:'',
        }
    };
  },
  created(){
      this.email=this.$route.params.email;
  }
,
  methods: {
    //修改密码
    fixedPassWord() {
      this.inputType = !this.inputType;
    },
      onSave(){
        let _this=this;
        _this.common.request('api/user/upPwd',_this.uoPwd,function (res) {
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
  margin-top: 44px;
  li {
    .flexStart;
    padding: 20px 0;
    border-bottom: 1px solid #f3f3f3;
    span {
      color: #7f7f7f;
      font-size: 16px;
      width: 100px;
      .tips {
        font-size: 12px;
      }
    }
       .inputW{
      width: calc(100% - 120px);
      input{
      width: 100%;
      color: #333;
      font-size: 14px;
    }
    }

    span.tipsRed {
      color: #ff0000;
      font-size: 16px;
    }

    .name {
      color: #1d1d1d;
      font-size: 16px;
      margin-left: 60px;
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
    input {
      color: #1d1d1d;
      font-size: 16px;
      width: 200px;
    }

    .fixed {
      color: #166593;
      font-size: 16px;
      margin-left: 59px;
    }
    .tipsWord {
      color: #ff0000;
      font-size: 16px;
      margin-left: 59px;
    }
    .tipsShow {
      color: #005885;
      font-size: 16px;
    }
  }
  li.top {
    .flexSBetween;
    .left {
      .flexStart;

      color: #737373;
      font-size-adjust: 16px;
      .tips {
        margin-left: 28px;
        color: #737373;
        font-size: 12px;
      }
    }
  }
  .pWord {
    width: calc(100% - 160px);
    .flexStart;
    margin-left: 60px;
    
  }
  .passwordState{
    width:300px;
    .flexStart;
   
    div{
 background: #000;
   width:16px;
height:16px;
margin-right: 14px;
.border-radius(50%);
    }
  
  }
}
</style>