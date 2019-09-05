<template>
  <div>
    <Topheader :keyword="keyword"></Topheader>
    <div class="w1100">
      <div class="info-body">
        <!--头像信息-->
        <div class="head-body">
          <div class="head-img-body">
            <div class="head-img">
              <img :src="allInfo.head_url" alt />
            </div>
            <i class="el-icon-camera-solid" @click="$router.push('/editHead')"></i>
          </div>
          <div class="head-info">
            <div class="title">{{allInfo.name}}</div>
            <div class="head-count">
              <span>{{allInfo.posts}} Post</span>
              <span>{{allInfo.linkers}} Linkers</span>
              <span>{{allInfo.follows}} Followers</span>
            </div>
          </div>
        </div>

        <!--基本信息-->
        <div class="jb-info-body">
          <div class="jb-title">
            <div class="title">个人基本</div>
            <router-link :to="{name:'personBasic',params:{name:allInfo.name,web_url:allInfo.web_url,achievement:allInfo.achievement,state:allInfo.state,province_id:allInfo.province_id,city_id:allInfo.city_id}}" class="edit-btn">编辑</router-link>
          </div>
          <div class="jb-spk">说明居住城市、真实姓名、个人网站、成就荣耀；</div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div>Live in {{allInfo.area_text}} from {{allInfo.state_text}}</div>
          </div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div>Registration time in {{allInfo.create_time}}</div>
          </div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div style="color: #3889c1" @click="common.openUrl(allInfo.web_url)">{{allInfo.web_url}}</div>
          </div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div>Your achievement is {{allInfo.achievement}}</div>
          </div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div>You name is {{allInfo.name}}</div>
          </div>
        </div>

        <!--安全已健康-->
        <div class="jb-info-body">
          <div class="jb-title">
            <div class="title">安全与健康</div>
            <router-link :to="{name:'personSafetyAndHealth',params: {email:allInfo.email}}" class="edit-btn">编辑</router-link>
          </div>
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">账户</div>
          </div>
          <div class="an-jk-list">
            <div class="title">邮箱</div>
            <div class="info">{{allInfo.email}}</div>
          </div>
          <div class="an-jk-list">
            <div class="title">密码</div>
            <div class="info">···············</div>
          </div>
        </div>

        <!--数据-->
        <div class="jb-info-body">
          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">数据</div>
          </div>
          <div class="an-jk-list">
            <div class="title">研究机构</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">商业APP</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">公益APP</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">设备</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">政府部门</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">组织机构</div>
            <div class="info">未开放</div>
          </div>
          <div class="an-jk-list">
            <div class="title">个人团体</div>
            <div class="info">未开放</div>
          </div>
        </div>

        <!--向访问者展示-->
        <div class="jb-info-body">
          <div class="jb-title">
            <div class="title">向访问者展示</div>
            <router-link :to="{name:'personShowVisiters',params:{
            zyly:allInfo.zyly,
            zyly_year:allInfo.zyly_year,
            jnk:allInfo.jnk,
            swfu:allInfo.swfu,
            swfu_year:allInfo.swfu_year,
            introduce:allInfo.introduce,
            welcome:allInfo.welcome
            }}" class="edit-btn">编辑</router-link>
          </div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">职业/研究领域</div>
            <div class="title-spk">用于推荐引用和搜索附言的展示</div>
          </div>
          <div class="show-content">{{allInfo.zyly}} - {{allInfo.zyly_year}}</div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">技能快</div>
            <div class="title-spk">用于推荐引用</div>
          </div>
          <div
            class="show-content"
          >{{allInfo.jnk}}</div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">商业服务</div>
            <div class="title-spk">用于搜索副标的展示</div>
          </div>
          <div class="show-content">{{allInfo.swfu}} - {{allInfo.swfu_year}}</div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">介绍语</div>
            <div class="title-spk">用于个人主页和搜索的展示</div>
          </div>
          <div class="show-content">
            {{allInfo.introduce}}
          </div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">招呼语</div>
            <div class="title-spk">用于推荐引用</div>
          </div>
          <div class="show-content">{{allInfo.welcome}}</div>
        </div>

        <!--关键词-->
        <div class="jb-info-body keyword-body">
          <div class="jb-title">
            <div class="title">索引种子</div>
            <router-link :to="{name:'personkeywords',params:{keyword:allInfo.keyword}}" class="edit-btn">编辑</router-link>
          </div>

          <div class="jb-list-body">
            <img src="../../static/img/logo.png" alt />
            <div class="title-img">关键词</div>
            <div class="title-spk">用于woshuoxia搜索的蜘蛛爬抓</div>
          </div>
          <div class="show-content">{{allInfo.keyword}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topheader from "../components/header"; //上传图片
export default {
  name: "infoEditInfo",
  components: {
    Topheader
  },
  data() {
    return {
      keyword: "",
        allInfo:{}
    };
  },
  created() {
      this.getInfo();
  },
  //方法定义
  methods: {
      //获取信息
      getInfo(){
          let _this=this;
          _this.common.request('api/user/allInfo',{},function (res) {
              if(res.status == 200){
                  _this.allInfo=res.data;
                  let userInfo={
                      email:_this.allInfo.email,
                      head_url:_this.allInfo.head_url,
                      name:_this.allInfo.name,
                  };
                  localStorage.setItem('userInfo',JSON.stringify(userInfo));
                  console.log(res);
              }
          })
      }
  }
};
</script>

<style scoped lang='less' rel="stylesheet/less">
@import "../assets/css/index.less";

.info-body {
  background-color: white;
  margin-top: 80px;
  margin-bottom: 80px;
  .head-body {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #dbdbdb;
    height: 115px;
    .head-img-body {
      position: relative;
      .head-img {
        .imgNoCut(160px;153px);
        top: -66px;
        left: 20px;
      }
      i {
        width: 25px;
        height: 25px;
        background-color: rgba(225,225,225,0.5);
        position: absolute;
        right: -10px;
        bottom: 35px;
        color: white;
        font-size: 26px;
      }
    }
    .head-info {
      margin-left: 40px;
      margin-top: 20px;
      .title {
        font-size: 32px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(87, 87, 87, 1);
        line-height: 19px;
      }
      .head-count {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(127, 127, 127, 1);
        line-height: 54px;
        span {
          margin-left: 30px;
        }
        span:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .jb-info-body {
    margin-top: 20px;
    margin-left: 20px;
    border-bottom: 1px solid #dbdbdb;
    .jb-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 40px;
      height: 40px;
      .title {
        font-size: 16px;
        font-weight: 600;
        color: rgba(28, 28, 28, 1);
        line-height: 23px;
      }
      .edit-btn {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(56, 137, 193, 1);
        line-height: 23px;
        cursor: pointer;
      }
    }
    .jb-spk {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(175, 175, 175, 1);
      line-height: 23px;
    }
    .jb-list-body {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 34px;
      line-height: 34px;
      img {
        width: 20px;
        height: 20px;
      }
      div {
        font-size: 14px;
        margin-left: 10px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
        line-height: 18px;
      }
      .title-img {
        font-weight: 600;
        color: rgba(23, 23, 23, 1);
        line-height: 23px;
      }
      .title-spk {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(175, 175, 175, 1);
        line-height: 23px;
      }
    }
    .an-jk-list {
      display: flex;
      justify-content: flex-start;
      margin-left: 30px;
      .title {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(29, 29, 29, 1);
        line-height: 23px;
        width: 80px;
      }
      .info {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
        line-height: 23px;
      }
    }

    .show-content {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(77, 77, 77, 1);
      line-height: 20px;
      margin: 10px 0 15px 30px;
    }
  }
  .keyword-body {
    border-bottom: 0;
    padding-bottom: 20px;
  }
}
</style>