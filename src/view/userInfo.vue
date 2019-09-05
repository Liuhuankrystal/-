<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <div class="top-content">
        <div class="head-body">
          <img :src="userInfo.head_url" alt />
        </div>

        <div class="head-right-body">
          <div class="info-title">
            <div class="info-name">{{userInfo.name}}</div>
            <div class="info-set" v-if="isSelf" @click="$router.push('/infoEditInfo')">编辑个人设定</div>
            <!--他人的-->
            <div class="info-link-follow" v-else>
              <div class="info-link" @click="onLink()">
                <img src="../../static/img/logo.png" alt />
                <div v-if="userInfo.is_link">解除Link</div>
                <div v-else>Link</div>
              </div>

              <div class="info-follow" @click="onFollow()">
                <img src="../../static/img/logo.png" alt />
                <div v-if="userInfo.is_follow">解除Follow</div>
                <div v-else>Follow</div>
              </div>
            </div>
          </div>

          <div class="info-spk">{{userInfo.introduce}}</div>

          <div class="info-count">
            <div class="info-cou">
              <div class="count-num">{{userInfo.posts}}</div>
              <div class="count-spk">Posts</div>
            </div>
            <div class="info-cou">
              <div class="count-num">{{userInfo.interflows}}</div>
              <div class="count-spk">Interflows</div>
            </div>
            <div class="info-cou">
              <div class="count-num">{{userInfo.searched}}</div>
              <div class="count-spk">Searched</div>
            </div>
          </div>
        </div>
      </div>

      <!--查看自己的显示才有发布-->
      <div v-if="isSelf">
        <div v-if="selfStatus == 1" @click="ons()">
          <div class="up-message">Here,Show Something about you</div>
        </div>
        <!--发布信息-->
        <div v-else class="upLoadMsg">
          <div class="upImg">
            <div class="addImg">
              <el-upload
                class="avatar-uploader"
                :action="common.uploadUrl()"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>

              <div class="word">添加图片</div>
            </div>
            <div class="fromWord">
              <textarea placeholder="你有什么事？" name id cols="30" rows="10" v-model="subInfo.content"></textarea>
            </div>
          </div>
          <div class="postBtton" @click="subPost()">Post</div>
        </div>
      </div>

      <div class="imgList">
        <div class="Img" v-for="(item,key) in imgList" :key="item.id" @click="bigImg(key)">
          <img :src="item.img_url" alt />
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
         
          <div class="imgBigAll">
             <div class="leftArrow" v-if="showKey > 0" @click="upClick()">上一页</div>
             <div class="rightArrow" v-if="showKey < imgList.length-1" @click="nextClick()">下一页</div>
            <div class="imgBigR">
              <el-image style="width: 616px; height: 770px" :src="showInfo.info.img_url"></el-image>
              <!-- <img src="../../static/img/sl.jpg" alt /> -->
            </div>
            <div class="imgBigL">
              <div class="bigName">
                <div class="img">
                  <img :src="showInfo.info.head_url" alt />
                </div>
                <div class="name">{{showInfo.info.user_name}}</div>
              </div>
              <div class="word">
                {{showInfo.info.content}}
              </div>
              <div class="wordNum" @click="toSeeinterflow(showInfo.info.id)">全部{{showInfo.info.leave_num}}条发言</div>
              <ul class="talkWord">
                <li v-for="item in showInfo.leaveList" :key="item.id">
                  <span class="name">{{item.user_name}}</span>
                  {{item.content}}
                </li>
              </ul>

              <div class="HightLight">
                <div class="HightLightNum">
                  <img v-if="showInfo.info.is_highlight" src alt @click="onHighlight()" />
                  <img v-else src alt @click="onHighlight()" />
                  <span>{{showInfo.info.highlight_num}}次Highlight</span>
                </div>
                <div class="time">{{showInfo.info.create_time}}</div>
              </div>
              <div class="interFlow">
                <input type="text" v-model="content" v-on:keyup.enter="subInterflow()" placeholder="Interflow…" />
              </div>
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
  name: "userInfo",
  data() {
    return {
      id: null,
      listNum1: 2,
      listNum: 3,
      isSelf: false,
      selfStatus: 1,
      imgBigState: false, //弹窗
      imageUrl: "",
      userInfo: {},
      page: 1,
      page_num: 6,
      loading: false,
      loadingType: 0, //0=可以加载 1=加载中 2=已加载完毕
      imgList: [], //图片列表,
      subInfo: {
        content: "",
        imgs_id: "",
        type: 3
      },
        showKey:0,//放大的数据,
        isGetShow:true,//是否可以请求
        showInfo:{
            info:{},
            leaveList:[]
        },
        content:null
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  },
  created() {
    this.id = this.$route.query.id;
    this.getInfo();
    this.getImgList(); //获取图片列表
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
      toSeeinterflow(id){
          this.$router.push({
              path:'/seeinterflow',
              query:{
                  id:id
              }
          })
      },
      //留言
      subInterflow(){
        let _this=this;
        let data={
            dynamic_id:_this.imgList[_this.showKey].id,
            content:_this.content
        };
        _this.common.request('api/dynamicLeave/interflow',data,function (res) {
              if(res.status == 200){
                  _this.$message({
                      message: res.message,
                      type: 'success',
                      duration: 1500,
                      center: true,
                      onClose:function (res) {
                      }
                  });
                  _this.showInfo.info.leave_num=res.data.leave_num;
                  _this.showInfo.leaveList=res.data.leaveList;//更新发言
                  _this.content=null;
              }
        },'post')
      },
    //发布个人主页信息
    subPost() {
      let _this = this;
      _this.common.request(
        "api/dynamic/add",
        _this.subInfo,
        function(res) {
          if (res.status == 200) {
            _this.$message({
              message: res.message,
              type: "success",
              duration: 1500,
              center: true,
              onClose: function(res) {
                _this.subInfo = {
                  content: "",
                  imgs_id: "",
                  type: 3
                };
                _this.imageUrl = null;
                _this.getImgList();
              }
            });
          }
        },
        "post"
      );
    },
    //获取个人主页图片列表
    getImgList() {
      let _this = this;
      _this.page = 1;
      let data = {
        id: _this.id,
        page: _this.page,
        page_num: _this.page_num
      };
      _this.common.request("api/dynamic/userHomeList", data, function(res) {
        if (res.status == 200) {
          _this.imgList = res.data.list;
        }
      });
    },
    //获取信息
    getInfo() {
      let _this = this;
      _this.common.request("api/user/info", { id: _this.id }, function(res) {
        if (res.status == 200) {
          _this.userInfo = res.data;
          _this.isSelf = res.data.is_self;
        }
      });
    },
    //link操作
    onLink() {
      let _this = this;
      _this.common.request(
        "api/userLinker/handel",
        { id: _this.id },
        function(res) {
          if (res.status == 200) {
            _this.userInfo.is_link = !_this.userInfo.is_link;
            _this.$message({
              message: res.message,
              type: "success",
              duration: 2500,
              center: true,
              onClose: function(res) {}
            });
          }
        },
        "post"
      );
    },
    //follow操作
    onFollow() {
      let _this = this;
      _this.common.request(
        "api/userFollow/handel",
        { id: _this.id },
        function(res) {
          if (res.status == 200) {
            _this.userInfo.is_follow = !_this.userInfo.is_follow;
            _this.$message({
              message: res.message,
              type: "success",
              duration: 2500,
              center: true,
              onClose: function(res) {}
            });
          }
        },
        "post"
      );
    },
    //上传图片
    handleAvatarSuccess(res, file) {
      this.subInfo.imgs_id = res.data.id;
      this.imageUrl = URL.createObjectURL(file.raw);
    },
      //点击高光
      onHighlight(){
        let _this=this;
        let id = _this.imgList[_this.showKey].id;
        _this.common.request('api/dynamic/highlight',{id:id},function (res) {
            if(res.status == 200){
                _this.showInfo.info.highlight_num=res.data.highlight_num;//
            }
        },'post')
      },
      //上一页
      upClick(){
        if(this.showKey>0){
            this.bigImg(this.showKey-1);//上一页
        }
      },
      //下一页
      nextClick(){
        if(this.showKey < this.imgList.length -1){
            this.bigImg(this.showKey+1);//上一页
        }
      },
    //显示弹窗
    bigImg(obj) {
        let _this=this;
        let id=_this.imgList[obj].id;

        //不能请求
        if(!_this.isGetShow){
            return;
        }
        _this.isGetShow=false;
        _this.common.request('api/dynamic/grInfo',{id:id},function (res) {
            _this.isGetShow=true;
            _this.imgBigState = true;
            _this.showInfo=res.data;
            _this.showKey=obj;
        });
    },
    //关闭弹窗
    clsoeImgBig() {
      this.imgBigState = false;
    },

    ons() {
      this.selfStatus = 2; //发布状态
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

      if (innerHeight <= outerHeight + scrollTop) {
        let _this = this;
        if (_this.loadingType != 0) {
          return;
        }
        _this.loadingType = 1;
        _this.loading = true;
        _this.page++;
        let list = [];
        let data = {
          id: _this.id,
          page: _this.page,
          page_num: _this.page_num
        };
        _this.common.request("api/dynamic/userHomeList", data, function(res) {
          if (res.status == 200) {
            list = res.data.list; //请求数据
            _this.loading = false;
            if (res.data.list_num <= 0) {
              _this.loadingType = 2;
              return;
            }
            _this.imgList = _this.imgList.concat(list);
            _this.loadingType = 0;
          }
        });
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
    cursor: pointer;
  }
  .postBtton:hover {
    background: rgba(24, 141, 223, 0.7);
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

// 弹窗
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
    .leftArrow,.rightArrow{
      position: absolute;
      top: 50%;
      margin-top: -10px;
      background: #fff;
      color: #000;
      font-size:12px;
      cursor: pointer;
      padding:10px;
    }
    .leftArrow{   left: -60px;}
    .rightArrow{right: -60px;}
    display: flex;
    justify-content: space-between;
    .imgBigR {
      // .imgCut( 616px,770px);
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
        cursor: pointer;
      }
      .wordNum:hover{
        text-decoration: underline;
      }
      .talkWord {
        height: 340px;
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
            cursor: pointer;
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
.imgBigTan {
  position: fixed;
  top: 0;
      left: 50%;
    margin-left: -550px;
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

.info-link-follow {
  display: flex;
  justify-content: flex-start;
}

.info-link,
.info-follow {
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  color: #187eb9;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
  }
  div:hover {
    text-decoration: underline;
  }
}

/*图片list*/
.imgList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  margin-top: 10px;
  .Img {
    width: 330px;
    height: 330px;
    margin-right: 42px;
    margin-bottom: 42px;
    .imgNoCut(330px, 330px);
  }
  .Img:nth-child(3n) {
    margin-right: 0;
  }
}
</style>