<template>
  <div class="header">
    <div class="w1100">
      <div class="left">
      </div>

      <div class="title">watch</div>

      <div class="right">
        <div class="name">Bukin{{search_show}}</div>
        <div class="line"></div>
        <div class="gohome" @click="$router.push('/dynamic')">Home</div>
        <div class="gohome">Editor Board</div>
        <!-- 个人中心 -->
        <div class="pCenter" @mouseenter="pCenterEnter()">>></div>

        <!-- 个人中心 下拉 -->
        <div class="pCenterCont" v-show="pCenterState" @mouseleave="pCenterLeave()">
          <div class="titNum" @click="$router.push('/linkers')">
            <div class="newsName">Linkers</div>
            <div class="newsNum">1,246</div>
          </div>
          <div class="titNum" @click="$router.push('/follows')">
            <div class="newsName">Followers</div>
            <div class="newsNum">1,246</div>
          </div>
          <div class="titNum" @click="$router.push('/infoEditInfo')">
            <div class="newsName">个人设定</div>
          </div>
          <div class="titNum">
            <div class="newsName" @click="$router.push('/palyList')">PlayList</div>
          </div>
          <div class="titNum" @click="common.loginOutSure()">
            <div class="newsName">退出</div>
          </div>
          
          <div class="talkTo" @click="talkTo()">Talk To WoShuoXia</div>
        </div>

      </div>
    </div>

    <!--反馈提交-->
    <div class="talk-body" v-show="talkShow" @click.self="talkHide()">

      <div v-if="talkStatus == 1" class="talk-content">
        <textarea placeholder="请告诉我们您发现有什么新的想法或者您在使用woshuoxia(我说下)服务的时候有什么问题及建
议，您的反馈我们都会详细阅读，并且将会采纳和处理，谢谢您的支持!"></textarea>
        <div class="talkSub" @click.stop="talkSub()">发 送</div>
      </div>
      <div v-else class="talk-message">
        <i class="el-icon-check"></i>
        <div>反馈成功，woshuoxia(我说下)团队将会详细阅读并处理问题和建议。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search_show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null
    },
      keyword: {
          type: String,
          default: null
      }
  },
  data() {
    return {
      PeopleState: false, //people
      newsState: false, //news
      pCenterState: false, //个人中心
        talkContent:null,
        showWord:true,
        talkShow:false,
        talkStatus:1,//1输入框 2=提示信息
    };
  },

  methods: {
       open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      //搜索
      subKeyword(){
        let _this=this;
        this.$router.push({
            path:'/userList',
            query:{
                keyword:_this.keyword
            }
        })
      },
      //反馈
      talkTo(){
          this.talkShow=true;
          this.talkStatus=1;
      },
      talkHide(){
        this.talkShow=false;
      },
      talkSub(){
        this.talkStatus=2;//提示信息
      },
  
    //鼠标经过，个人中心下拉显示
    pCenterEnter() {
      this.pCenterState = true;
      this.PeopleState = false;
      this.newsState = false;
    },
    //鼠标离开，个人中心下拉隐藏
    pCenterLeave() {
      this.pCenterState = false;
    }
  }
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";

.header {
  background: #fff;
  padding: 8px 0;
  border-bottom: 1px #dedede solid;
  .w1100 {
    .flexSBetween;
  }
  .left {
    input {
      width: 328px;
      height: 32px;
      text-indent: 22px;
      background: #ededed;
      border-radius: 16px;
    }
  }

  .title {
    font-weight: 600;
    height: 24px;
    line-height: 24px;
    position: relative;
  }
  .title::before{
      content:"";
      position:absolute;
      bottom:-9px;
      left: 50%;
      width: 24px;
      margin-left: -12px;
      background: #000;
      height:2px;

    }

  .right {
    position: relative;

    // people下拉
    .linkCont {
      width: 374px;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(153, 152, 152, 1);
      position: absolute;
      top: 38px;
      right: 22px;
      z-index: 10;

      ul {
        li {
          border-bottom: 1px solid #e0e0e0;
          padding: 14px;
          .flexSBetween;
          .ImgName {
            .flexStart;
            .img {
              width: 42px;
              height: 42px;
              margin-right: 16px;
              img {
                width: 42px;
                height: 42px;
                .border-radius(50%);
              }
            }
            .imgnames {
              color: #000;
              font-size: 14px;
              .nameWod {
                font-weight: bold;
              }
              .linkBlue {
                color: #157ecf;
              }
              .time {
                color: #919191;
              }
            }
          }
          .choes {
            .flexStart;
            .yes,
            .no {
              width: 20px;
              height: 20px;
              text-align: center;
              color: #fff;
              .border-radius(50%);
            }
            .yes {
              background: #1fa9f0;
              margin-right: 20px;
            }
            .no {
              background: #d1d1d1;
            }
          }
        }
      }
      .lookAll {
        color: #2d6281;
        font-size: 14px;
        text-align: center;
        padding: 19px 0;
        display: block;
        cursor: pointer;
      }
      .lookAll:hover{
        text-decoration: underline;
      }
    }
    //消息
    .newsCont {
      width: 374px;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(153, 152, 152, 1);
      position: absolute;
      top: 38px;
      right: 22px;
      z-index: 10;
      ul {
        li {
          border-bottom: 1px solid #e0e0e0;
          padding: 14px;
          .flexSBetween;
          .ImgName {
            .flexStart;
            .img {
              width: 42px;
              height: 42px;
              margin-right: 16px;
              img {
                width: 42px;
                height: 42px;
                .border-radius(50%);
              }
            }

            .newsName {
              .names {
                color: #1d1d1d;
                font-size: 14px;

              }
              .time {
                color: #7f7f7f;
              }
              .word{
                color: #7F7F7F;
                font-size:14px;
                .oneLines;
              }
            }
          }
          .readed{
            span{
              width:10px;
              height:10px;
              display: inline-block;
              background:#3799F5;
              border-radius:50%;
            }
          }
        }
      }
       .lookAll {
        color: #2d6281;
        font-size: 14px;
        text-align: center;
        padding: 19px 0;
        display: block;
         cursor: pointer;
       }
      .lookAll:hover{
        text-decoration: underline;
      }
    }

    //news 下拉
    .pCenterCont {
      width: 266px;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(153, 152, 152, 1);
      position: absolute;
      top: 38px;
      right: -9px;
      z-index: 10;
      padding: 16px;
      .titNum {
        margin-bottom: 22px;

        .flexSBetween;

        .newsName,
        .newsNum {
          width: 50%;
          font-size: 16px;
        }
        .newsName {
          color: #1d1d1d;
          cursor: pointer;
        }
        .newsName:hover{
          text-decoration: underline;
        }
        .newsNum {
          color: #7F7F7Fs;
        }
      }
      .talkTo {
        color: #1d1d1d;
        font-size: 16px;
        padding-top: 22px;
        display: block;

        border-top: 1px solid #e5e5e5;
          cursor: pointer;
      }
        .talkTo:hover{
            text-decoration: underline;
        }
    }
    .flexEnd;
    .name {
      color: #2c2c2c;
      font-size: 14px;
      margin-left: 20px;
    }
    .line {
      background: #e2e2e2;
      width: 2px;
      height: 24px;
      margin-left: 20px;
    }
    .gohome {
      color: #2c2c2c;
      font-size: 14px;
      cursor: pointer;
      margin-left: 20px;
    }
    .gohome:hover {
      text-decoration: underline;
    }

    .people,
    .news {
      background: #2e4756;
      width: 18px;
      height: 18px;
      position: relative;
      margin-left: 20px;
      cursor: pointer;
      .num {
        .positionART(-10px, -10px);
        background: #ff0000;
        border-radius: 7px;
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
      }
    }
    .pCenter {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
  .talk-body{
    position: fixed;
    width: 100%;
    height: 100%;
    background:rgba(28,28,28,0.5);
    z-index: 99;
    justify-content: center;
    align-items: center;
    display: flex;
    .talk-content{
      width:719px;
      height:460px;
      background-color:white;
      border-radius:10px;
      z-index: 99;
      text-align: center;
      textarea {
        color: #1d1d1d;
        font-size: 14px;
        outline: none;
        resize: none;
        border: none;
        background: transparent;
        margin-top:20px ;
        width: 600px;
        height: 360px;
      }
      .talkSub{
        height:54px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(22,101,147,1);
        line-height:54px;
        cursor: pointer;
      }
      .talkSub:hover{
        color:rgba(22,101,147,0.7);

      }
    }
    .talk-message{
      width:719px;
      height:170px;
      background:rgba(255,255,255,1);
      border-radius:10px;
      margin-top: -300px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      i{
        width: 118px;
        height: 118px;
        border-radius: 50%;
        margin-left: 20px;
        text-align: center;
        line-height: 118px;
        color: white;
        background-color: #4DD113;
        font-size: 65px;
        font-weight: 600;
      }
      div{
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(28,28,28,1);
        line-height:24px;
        margin-left: 10px;
      }
    }
  }
</style>