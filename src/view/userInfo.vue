<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100" :class="imgBigState==true?'imgBigTan':''">
      <div class="top-content">
        <div class="head-body">
          <img src="../../static/img/head.png" alt />
        </div>

        <div class="head-right-body">
          <div class="info-title">
            <div class="info-name">穆风杰</div>
            <div class="info-set">编辑个人设定</div>
          </div>

          <div class="info-spk">
            Instagram 是捕捉和分享世界精彩瞬间的简单方式。只需关注，即可借他人之眼来捕捉
            全球的精彩瞬间，并从中发现趣味。超过 10 亿用户选择了 Instagram，速速加入他们，
            用照片和视频拍下不一样的每一天，用影像传达个性符号吧！
          </div>

          <div class="info-count">
            <div class="info-cou">
              <div class="count-num">1,266</div>
              <div class="count-spk">Posts</div>
            </div>
            <div class="info-cou">
              <div class="count-num">12.6K</div>
              <div class="count-spk">Interflows</div>
            </div>
            <div class="info-cou">
              <div class="count-num">18.6M</div>
              <div class="count-spk">Searched</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isSelf" @click="ons()">
        <div class="up-message">Here,Show Something about you</div>
      </div>

      <div v-else class="upLoadMsg">
        <div class="upImg">
          <div class="addImg">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <div class="word">添加图片</div>
          </div>
          <div class="fromWord">
            <textarea placeholder="你有什么事？" name id cols="30" rows="10" v-model="upwords"></textarea>
          </div>
        </div>
        <div class="postBtton">Post</div>
      </div>

      <!--内容信息-->
      <div class="list-body">
        <div class="list-body2" v-for="item1 in listNum1" :key="item1">
          <div class="list-info" v-for="item in listNum" :key="item"  @click='bigImg()'>
            <img src="../../static/img/sl.jpg"  alt />
          </div>
        </div>
      </div>

      <div
        class="loading"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(246, 246, 246, 0.8)"
      ></div>
    </div>

    <div class="bg" v-show="imgBigState" @click="clsoeImgBig()"></div>
    <div class="imgBig" v-show="imgBigState">
      <el-carousel arrow="always" height="770px" autoplay="false">
        <el-carousel-item v-for="item in 1" :key="item">
          <div class="imgBigAll">
            <div class="imgBigR">
              <img src="../../static/img/sl.jpg" alt />
            </div>
            <div class="imgBigL">
              <div class="bigName">
                <div class="img">
                  <img src="../../static/img/sl.jpg" alt />
                </div>
                <div class="name">Bukin</div>
              </div>
              <div class="word">
                观看你最喜欢的 Instagram 创作者发布的纵向长视频。IGTV 带给用户
                的体验有别于与一般的视频。IGTV 视频是纵向且全屏的，侧边没有任何
                黑框，因此，你无需旋转自己的手机。而且，这些视频并未限制为一分钟
                ，这意味着你可以看到更多喜欢的内容。
              </div>
              <div class="wordNum">全部16条发言</div>
              <ul class="talkWord">
                <li v-for="item in 5" :key="item">
                  <span class="name">Mr.Msh</span>
                  只能现拍太局限了，很多以前拍的长视频如果可以导入处理的话那就非常棒了，期待更新的那一天！
                </li>
              </ul>

              <div class="HightLight">
                <div class="HightLightNum">
                  <img src alt />
                  <span>2,888次Highlight</span>
                </div>
                <div class="time">10.16 at 08:20PM 2019</div>
              </div>
              <div class="interFlow">
                <input type="text" placeholder="Interflow…" />
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>



<script>
import Topheader from "../components/header"; //上传图片
export default {
  components: {
    Topheader
  },
  name: "userInfo",
  data() {
    return {
      listNum1: 2,
      listNum: 3,
      loading: true,
      isSelf: true,
      imgBigState:false,//弹窗
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#F6F6F6");
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    //上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    //显示大图
    bigImg(){
        this.imgBigState=true;
    },
    //关闭大图
    clsoeImgBig(){
         this.imgBigState=false;
    },

    ons() {
      this.isSelf=false;
    },
    //加载跟多
    onScroll() {
      //可滚动容器的高度
      let innerHeight = document.querySelector("#app").clientHeight;
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop;
      //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      console.log(innerHeight + " " + outerHeight + " " + scrollTop);
      if (innerHeight < outerHeight + scrollTop) {
        //加载更多操作
        console.log("loadmore");
        this.listNum1 += 2;
      }
    }
  }
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";

.top-content {
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  align-items: center;
  width: 773px;
  margin: 0 auto;
}

.head-body {
  margin-right: 38px;
  text-align: center;
  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0 auto;
  }
}

.head-right-body {
  width: 605px;
}

.info-title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  line-height: 30px;
}

.info-name {
  font-weight: 600;
  font-size: 18px;
}
.info-set {
  margin-left: 20px;
  font-size: 14px;
  color: #187eb9;
  cursor: pointer;
}
.info-set:hover {
  text-decoration: underline;
}

.info-spk {
  width: 605px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(91, 91, 91, 1);
  line-height: 24px;
}

.info-count {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.info-cou {
  margin-left: 40px;
}

.count-num {
  font-size: 22px;
  font-weight: bold;
}

.count-spk {
  font-size: 14px;
  color: #8b8b8b;
}

.info-count .info-cou:first-child {
  margin-left: 0;
}

.up-message {
  border-top: 0.5px solid #717171;
  border-bottom: 0.5px solid #717171;
  height: 60px;
  line-height: 60px;
  //text-indent: 120px;
  text-align: center;
  color: #717171;
  cursor: pointer;
}

// 上传
.upLoadMsg {
  width: 773px;
  margin: 20px auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .upImg {
    .flexStart;
  }
  .addImg {
    width: 100px;
    height: 100px;
    margin-right: 38px;
    background: #d7d7d7;
    .word {
      color: #166593;
      font-size: 14px;
      text-align: center;
      margin-top: 17px;
    }
  }
  .fromWord {
    width: 511px;
    padding: 14px;
    color: #afafaf;
    height: 87px;
    margin: 7px 0;
    textarea {
      color: #1d1d1d;
      font-size: 14px;
      height: 87px;
      outline: none;
      resize: none;
      width: 100%;
      border: none;
      background: transparent;
    }
  }
  .postBtton {
    width: 62px;
    height: 26px;
    line-height: 26px;
    background: #188ddf;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border-radius: 13px;
  }
}

/*lists*/
.list-body {
  position: relative;
}
.list-body2 {
  display: flex;
  justify-content: space-between;
}

.list-info {
  height: 358px;
  width: 358px;
  margin-top: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}

.loading {
  width: 100%;
  height: 40px;
  text-align: center;
  background-color: #f6f6f6;
}

.imgBig {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1088px;
  z-index: 101;
  margin-left: -544px;
  margin-top: -350px;
  background: #fff;
  .el-carousel__container {
    height: 770px !important;
  }

  .imgBigAll {
    .flexSBetween;
    .imgBigR {
      width: 616px;
      height: 770px;
      img {
        width: 100%;
      }
    }
    .imgBigL {
      width: 472px;
      padding: 16px 26px;
      .bigName {
        .flexStart;
        padding-bottom: 16px;
        border-bottom: 1px solid #ebebeb;
        .img {
          margin-right: 15px;
          img {
            width: 44px;
            height: 44px;
            .border-radius(50%);
          }
        }
        .name {
          color: #1d1d1d;
          font-size: 14px;
        }
      }

      .word {
        margin-top: 16px;
        color: #6d6d6d;
        font-size: 14px;
        line-height: 24px;
      }
      .wordNum {
        color: #7f7f7f;
        font-size: 14px;
        margin-top: 14px;
        margin-bottom: 29px;
      }
      .talkWord {
        height: 300px;
        overflow-y: auto;
        li {
          margin-bottom: 13px;
          font-size: 14px;
          color: #4d4d4d;
          .name {
            color: #4d4d4d;
          }
        }
      }
      .HightLight {
        padding: 16px 0;
        .HightLightNum {
          .flexStart;
          margin-bottom: 20px;
          img {
            width: 18px;
            height: 18px;
            background: #c6c6c6;
            margin-right: 14px;
          }
          span {
            color: #27292a;
            font-size: 14px;
            font-weight: bold;
          }
        }
        .time {
          color: #7f7f7f;
          font-size: 16px;
          font-weight: 400;
        }
      }
      .interFlow {
        border-top: 1px solid #e0e0e0;
        padding-top: 26px;
        input {
          color: #7f7f7f;
          font-size: 18px;
          width: 100%;
        }
      }
    }
  }
}
.imgBigTan{
     position: fixed;
  top: 0;
  left: 0;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}
// 上传图片
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.el-carousel__container {
  height: 770px !important;
}
</style>