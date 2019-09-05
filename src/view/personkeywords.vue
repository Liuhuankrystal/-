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
              <div class="save" @click="onSave()">保存</div>
            </div>
          </li>
        </ul>

        <div class="keyWord">
          <textarea name=""  v-model="userKeyword" cols="30" rows="10" placeholder="关键词"></textarea>
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
    return {
        userKeyword:''
    };
  },
    created(){
      this.userKeyword=this.$route.params.keyword;
    },
    methods:{
        onSave(){
            let _this=this;
            _this.common.request('api/user/upKeyword',{keyword:_this.userKeyword},function (res) {
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
.keyWord textarea{
  color: #333;
  font-size: 14px;
  outline: none;
  border: none;
  background: #F3F3F3;
  padding:1%;
  width: 98%;
  resize: none;
}


</style>