<template>
  <div>
    <Topheader></Topheader>

    <div class="w1100">
      <div class="home">
        <div class="left">
          <div class="name">
            <img src alt />
            <div class="names">张伯卿</div>
          </div>

          <div class="name">
            <img src alt />
            <div class="names">Debut</div>
          </div>
          <div class="tit">CANAPE</div>
          <div class="name">
            <img src alt />
            <div class="names">Debut</div>
          </div>
        </div>
        <div class="center">
          <div class="postMsg">
            <div class="tabs">
              <div class="word active">
                <img src alt />
                Update Some
              </div>
              <div class="word">
                <img src alt />
                Add Photos
              </div>
            </div>
            <div class="fromWord">
              <textarea placeholder="你有什么事？" id cols="30" rows="10"></textarea>
            </div>
            <div class="post">
              <div class="button">Post</div>
            </div>
          </div>

          <!-- 欢迎加入 -->
          <div class="joinUs">
            <div class="close">X</div>
            <div class="left">
              <img src alt />
            </div>
            <div class="right">
              <div class="tit">欢迎加入woshuoxia</div>
              <div class="word">我们会定期推出应用更新，让应用变得更加完善。感谢使用woshuoxia！</div>
              <div class="smallWord">现在，向快拍和动态消息发布照片和视频时可以添加音乐片段啦！</div>
            </div>
          </div>

          <!-- 更新视图 -->
          <div class="news">
            <div class="topHead">
              <img src alt />
              <div class="left">
                <div class="name">BukinZhang</div>
                <div class="time">10.16 at 08:20PM</div>
              </div>
            </div>
            <div class="picture">
              <el-carousel indicator-position="outside" trigger="click" height="544px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <img src alt />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="message">
              <div class="num">2,888次Highlight</div>
              <div class="word">
                观看你最喜欢的 Instagram 创作者发布的纵向长视频。
                IGTV 带给用户的体验有别于与一般的视频。IGTV 视频是纵向且全屏的，侧边没有任
                何黑框，因此，你无需旋转自己的手机。而且，这些视频并未限制为一分钟，这意味
                着你可以看到更多喜欢的内容。
              </div>
              <div class="speakNum">
                全部16条发言
                <span class="yellowR"></span> 6位未发言
              </div>
              <div class="name">
                <span class="nameWord">Mr.Msh</span>只能现拍太局限了，很多以前拍的长视频如果可以导入处理的话
              </div>
            </div>
            <div class="Interflow">
              <div class="icon"></div>
              <div class="word">Interflow…</div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="homeRCont">
            <!-- 1 -->
            <div class="welcome">
              <div class="icon"></div>
              <div class="welcomeName">
                欢迎<span>邀请您的伙伴</span>加入woshuoxia
              </div>
            </div>

            
            <!-- 2.1 -->
            <div class="allPeople">
              <div class="icon">11</div>
              <div class="name">
                <a href="">王茜、</a>
                <a href="">Eterian、</a>
                <a href="">Lillian、</a>
                <span>and</span>  
                <a href=""  class="sixPeople">6 others为您推荐</a>
                <span>ta们会不会是有料的伙伴呢？感兴趣就“Link”吧，相信你会遇见开心！ </span>
              </div>
            </div>
            <!-- 2.2 -->
            <div class="HLight">
              <div class="icon"></div>
              <div class="HLightName">
                <div class="name">Highlight 大赏</div>
                <div class="HLightImgNum">
                  <div class="HLightImg">
                    <img src='' alt />
                    <img src='' alt />
                    <img src='' alt />
                  </div>
                  <div class="HLightNum">1,286</div>
                </div>
                <div class="word">根据伙伴之间互动高光来选拔展示</div>
              </div>
            </div>

            <!-- 3 -->
            <div class="dayNum">26日人物</div>
            <a class="dayName">@克莱西</a>
            <div class="dayWrod">1,288 发言 ·Woshuoxia Founder & PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topheader from "../components/header"; //上传图片
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      passWord: ""
    };
  },
  created(){
      console.log(this.$route.query);
  }
,
  methods:{

  }
,
  components: {
    Topheader
  }
};
</script>
<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
body {
  background: #cbcbcb;
}

.home {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 186px;
    .name {
      margin-bottom: 10px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
        background: #000;
      }
      .names {
        color: #353535;
      }
    }
    .tit {
      color: #7f7f7f;
      font-size: 14px;
      margin: 14px 0;
    }
  }
  .center {
    width: 544px;
  }
  .right {
    width: 336px;
    background: #fff;
  }
}

// post
.postMsg {
  background: #fff;
  .tabs {
    padding: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid #d6d6d6;
    .flexStart;
    .word {
      color: #26709b;
      font: 14px;
      margin-right: 30px;
    }
    .word.active {
      position: relative;
    }
    .word.active::before {
      content: "";
      position: absolute;
      bottom: -13px;
      left: 50%;
      margin-left: 0px;
      width: 40px;
      height: 2px;
      background: #1c1c1c;
    }
    img {
      width: 20px;
      height: 20px;
      background: #c6c6c6;
      margin-right: 12px;
    }
  }
  .fromWord {
    padding: 14px;
    color: #afafaf;

    textarea {
      color: #afafaf;
      font-size: 14px;
      height: 54px;
      outline: none;
      resize: none;
      width: 100%;
      border: none;
    }
  }
  .post {
    .flexEnd;
    border-top: 1px solid #d6d6d6;
    padding: 14px;
    .button {
      color: #15a3f5;
      font-size: 14px;
      width: 62px;
      height: 26px;
      line-height: 26px;
      background: #e8e8e8;
      border-radius: 13px;
      text-align: center;
    }
  }
}

// 欢迎加入
.joinUs {
  margin-top: 16px;
  background: #fff;
  padding: 18px 14px;
  .flexStart;
  position: relative;
  .close {
    position: absolute;
    top: 14px;
    right: 14px;
    background: #c5c5c5;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
  }
  .left {
    img {
      width: 94px;
      height: 94px;
      background: #a6a6a6;
      margin-right: 14px;
    }
  }
  .right {
    .tit {
      color: #1c1c1c;
      font-size: 20px;
      font-weight: bold;
      .oneLines;
      height: 20px;
    }
    .word {
      color: #1c1c1c;
      font-size: 16px;
      height: 36px;
      margin-top: 15px;
      margin-bottom: 9px;
      .twoLines;
    }
    .smallWord {
      color: #7f7f7f;
      font-size: 14px;
      height: 15px;
      .oneLines;
    }
  }
}

// 更新视图

.el-carousel__container {
  position: relative;
  height: 100% !important;
}
.el-carousel__indicators--outside {
  bottom: -20px !important;
}
.news {
  margin-top: 14px;
  background: #fff;
  //头像
  .topHead {
    padding: 14px;
    .flexStart;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 14px;
    }
    .left {
      .name {
        color: #1d1d1d;
        font-size: 14px;
      }
      .time {
        color: #7f7f7f;
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }

  // 图片
  .picture {
    width: 544px;
    height: 544px;
    background: #f5f5f5;

    img {
      width: 100%;
    }
  }

  //发言
  .message {
    padding: 14px;
    .num {
      color: #282a2b;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .word {
      color: #1c1c1c;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 12px;
    }
    .speakNum {
      margin-bottom: 12px;
      color: #7f7f7f;
      font-size: 14px;
      .flexStart;
    }
    .yellowR {
      width: 14px;
      height: 14px;
      background: #e6d621;
      display: inline-block;
      margin: 0 8px;
    }
    .name {
      margin-bottom: 12px;
      .nameWord {
        font-weight: bold;
      }
      color: #4d4d4d;
      font-size: 14px;
    }
  }

  //Interflow
  .Interflow {
    .flexSBetween;
    .icon {
      width: 22px;
      height: 22px;
      background: #c6c6c6;
      margin-top: 15px;
    }
    .word {
      color: #7f7f7f;
      font-size: 14px;
    }
  }
}

// right

.homeRCont {
  padding: 36px 14px 14px 14px;
  .welcome {
    .flexStart;
    padding-bottom: 14px;
    border-bottom: 1px solid #e7e7e7;
  }
  .icon {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    display: block;
    background: #c6c6c6;
  }
  .welcomeName {
    color: #1c1c1c;
    font-size: 14px;
    span {
      color: #166593;
      font-size: 14px;
    }
  }

  // 2
  .allPeople{
    margin-top: 14px;
    display: flex;
    justify-content: flex-start;
      .name{
        color: #7f7f7f;
        font-size: 14px;
        line-height: 20px;
        a {
          color: #166593;
        }
        span {
          color: #7f7f7f;
        }
        .sixPeople {
          color: #166593;
        }
      }
    
  }

  // 2.2
  .HLight {
    margin-top: 22px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 14px;
    .HLightName {
      .name {
        font-size: 14px;
        color: #166593;
        margin-bottom: 14px;
      }
    }
    .HLightImgNum {
      .flexStart;
      .HLightImg {
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          // margin-left: -25%;
          border: 2px solid #fff;
          background: #c6c6c6;
        }
      }
      .HLightNum {
        color: #1c1c1c;
        font-size: 14px;
        font-weight: bold;
        margin-left: 12px;
      }
      .word {
        color: #7f7f7f;
        font-size: 14px;
      }
    }
  }

  // 3
  .dayNum {
    color: #737373;
    font-size: 14px;
    margin-top: 14px;
  }
  .dayName {
    color: #166593;
    font-size: 14px;
    font-weight: bold;
    margin-top: 12px;
    display: inline-block;
  }
  .dayWrod {
    color: #1c1c1c;
    font-size: 14px;
    margin-top: 9px;
  }
}
</style>