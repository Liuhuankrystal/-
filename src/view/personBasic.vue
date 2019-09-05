<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <ul class="BasicCont">
        <li class="top">
          <span class="left">个人基本</span>
          <div class="right">
            <router-link to="/infoEditInfo" class="back">返回个人设定</router-link>
            <div class="save" @click="onSave()">保存</div>
          </div>
        </li>

        <li>
          <span>您的真实姓名：</span>
          <div class="name inputW"><input type="text" v-model="userInfo.name" placeholder="请输入您的真实姓名"></div>
        </li>
        <li>
          <span>常住城市：</span>
          <div class="cityAll">
             <div class="city">
            <el-select v-model="userInfo.province_id" @change="changeArea1" placeholder="请选择">
              <el-option
                v-for="item in area1List"
                :key="item.id"
                :label="item.areaname"
                :value="item.id"
              >
                {{item.areaname}}
              </el-option>
            </el-select>
          </div>
          <div class="cityName">省</div>
          <div class="city">
            <el-select v-model="userInfo.city_id" placeholder="请选择">
              <el-option
                v-for="item in area2List"
                :key="item.id"
                :label="item.areaname"
                :value="item.id"
              >
                {{item.areaname}}
              </el-option>
            </el-select>
          </div>
          <div class="cityName">市</div>
          <div class="city">
            <el-select v-model="userInfo.state" placeholder="请选择国籍">
              <el-option v-for="(vo,key) in stateList" :label="vo" :key="key" :value="key">
                {{vo}}
              </el-option>
            </el-select>
          </div>
          <div class="cityName">国籍</div>
          </div>
        </li>
        <li>
          <span>个人网站：</span>
          <div class="inputW">
            <input type="text" v-model="userInfo.web_url" placeholder="写点吧！">
          </div>
        </li>
        <li>
          <span>一项成就荣耀：</span>
          <div class="inputW">
            <input type="text" v-model="userInfo.achievement" placeholder="写点吧！">
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
  name: "debut",

  data() {
    return {
        userInfo:{},//基础信息
        area1List:[],//省列表
        area2List:[],//市列表
        stateList:null,//国家列表
    };
  },
    created(){
      this.userInfo=this.$route.params;
      console.log(this.$route.params);
        this.userInfo.state=this.userInfo.state.toString();
        this.getAreaList();//获取省
        if(this.userInfo.province_id){
            this.getAreaList(this.userInfo.province_id);//获取市
        }
      this.getStatelList();//获取国家列表
    },
    methods:{
      /*提交数据*/
        onSave(){
            let _this=this;
            _this.common.request('api/user/upJbInfo',_this.userInfo,function (res) {
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
        },
        //获取省市
        getAreaList(pid){
          let _this=this;
          pid = pid || null;
          _this.common.request('api/area',{pid:pid},function (res) {
              if(res.status == 200){
                  if(pid){
                      _this.area2List=res.data.list;
                  }else {
                      _this.area1List=res.data.list;
                  }
              }
          })
        },
        //切换省
        changeArea1(e){
            this.getAreaList(e);
            this.userInfo.city_id=null;
        },
        //获取国家列表
        getStatelList(){
            let _this=this;
            _this.common.request('api/index/getStateList',{},function (res) {
                if(res.status==200){
                    _this.stateList=res.data;
                    console.log(res);
                }
            })
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
    }
    .inputW{
      width: calc(100% - 120px);
      input{
      width: 100%;
      color: #333;
      font-size: 14px;
    }
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
.cityAll{
  .flexStart;
  .cityName{
    color: #353535;
    font-size: 15px;
    margin: 0 15px;
  }
}
</style>