<template>
  <div>
    <Topheader></Topheader>

    <div class="w1100">
      <div class="home">
        <div class="left">
          <div class="name head_body" @click="$router.push('/userInfo')">
            <img :src="userInfo.head_url" alt />
            <div class="names">{{userInfo.name}}</div>
          </div>

          <div class="name cursor head_body" @click="$router.push('/debut')">
            <img src="../../static/icon/Debut.png" alt />
            <div class="names">Debut</div>
          </div>
          <div class="tit">CANAPE</div>
          <div class="name head_body">
            <img src="../../static/icon/dongtaishiwuon.png" alt />
            <div class="names" style="font-weight: bold">动态事物</div>
          </div>
        </div>
        <div class="center">
          <div class="postMsg">
            <div class="tabs">
              <div class="word" :class="homePhotoUpNum==1?'active':''" @click="homePhotoUP(1)">
                <img src alt />
                Update Some
              </div>
              <div class="word" :class="homePhotoUpNum==2?'active':''" @click="homePhotoUP(2)">
                <img src alt />
                Add Photos
              </div>
            </div>
            <div class="fromWord">
              <textarea
                @input="textareaF"
                placeholder="你有什么事？"
                cols="30"
                rows="10"
                v-model="content"
              ></textarea>
            </div>
            <div class="post" >
              <div class="picture">
                <span v-show="upPictrue">上传照片最多12张</span>
              </div>
              <div class="button" :class="textareaL>0?'active':''" @click="dynamicPost()">Post</div>
              <div class="upPicture" v-show="upPictrue">
                <div class="pictureNum">
                  <div class="num">已上传：{{imgs_id.length}} 张</div>
                  <div class="close" @click="close()">
                    X
                    <!-- <img src alt /> -->
                  </div>
                </div>
                <el-upload
                  class="avatar-uploader"
                  :action="common.uploadUrl()"
                  list-type="picture-card"
                  :on-remove="handleRemove"
                  :on-preview="handlePictureCardPreview"
                  :on-success="handleAvatarSuccess"
                  :limit="12"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </div>
            </div>
          </div>

          <!-- 欢迎加入 -->
          <div class="joinUs" v-if="Inform.id">
            <div class="close" @click="closeInform()">X</div>
            <div class="left">
              <img src="../../static/img/forget.png" alt />
            </div>
            <div class="right">
              <div class="tit">{{Inform.title}}</div>
              <div class="word">{{Inform.spk}}</div>
              <div class="smallWord">{{Inform.content}}</div>
            </div>
          </div>

          <!-- 更新视图 -->
          <div class="news" v-for="(vo,key) in list" :key="vo.id">
            <div class="topHead">
              <img :src="vo.head_url" alt />
              <div class="left">
                <div class="name" @click="toUserInfo(vo.user_id)">{{vo.user_name}}</div>
                <div class="time">{{vo.create_time}}</div>
              </div>
            </div>
            <div class="picture" v-if="vo.type == 2">
              <el-carousel trigger="click" height="544px">
                <el-carousel-item v-for="(img,k) in vo.imgList" :src="k" :key="k">
                  <img :src="img" alt />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="picture" v-if="vo.type == 3">
                  <img v-for="(img,k2) in vo.imgList" :src="img" alt  :key="k2" />
            </div>
            <div class="message">
              <div class="num">{{vo.highlight_num}}次Highlight</div>
              <div class="word">{{vo.content}}
              </div>
              <div class="speakNum">
                <span class="toAll" @click="toSeeinterflow(key)">全部{{vo.leave_num}}条发言</span>
                <span v-if="vo.linker_type == 1" class="yellowR"></span>
                <span v-else-if="vo.linker_type == 2" class="yellowR"></span>
                <span v-else-if="vo.linker_type == 3" class="yellowR"></span> {{vo.linker_spk}}
              </div>
              <div class="name" v-for="(leave) in vo.leaveList">
                <span class="nameWord">{{leave.user_name}}</span> {{leave.content}}
              </div>
            </div>
            <div class="Interflow">
              <div v-if="vo.is_highlight" @click="onHighlight(key)" class="icon"></div>
              <div v-else class="icon" @click="onHighlight(key)"></div>
              <div class="word">
                <input type="text" v-on:keyup.enter="subInterflow(key)" v-model="vo.interflowContent" placeholder="Interflow…" />
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="homeRCont">
            <!-- 1 -->
            <div class="welcome">
              <div class="icon"></div>
              <div class="welcomeName">
                欢迎
                <span>邀请您的伙伴</span>加入woshuoxia
              </div>
            </div>

            <!-- 2.1 -->
            <div class="allPeople">
              <div class="icon">11</div>
              <div class="name" v-if="rmdInfo.user">
                <router-link
                  :to="{name:'recommend',params:{ids:rmdInfo.ids}}"
                >{{rmdInfo.user.userName}}</router-link>
                <span v-if="rmdInfo.user.others">and</span>
                <router-link
                  v-if="rmdInfo.user.others"
                  :to="{name:'recommend',params:{ids:rmdInfo.ids}}"
                  class="sixPeople"
                >{{rmdInfo.user.others}}</router-link>
                <span>ta们会不会是有料的伙伴呢？感兴趣就“Link”吧，相信你会遇见开心！</span>
              </div>
            </div>
            <!-- 2.2 -->
            <div class="HLight">
              <div class="icon"></div>
              <div class="HLightName">
                <router-link to="/pointTime" class="name">Highlight 大赏</router-link>
                <div class="HLightImgNum">
                  <div class="HLightImg">
                    <router-link
                      v-for="(vo,key) in highlightInfo.list"
                      :key="key"
                      :to="{path:'/pointTime',query: {id:vo.id}}"
                    >
                      <img :src="vo.head_url" alt />
                    </router-link>
                  </div>
                  <div class="HLightNum">{{highlightInfo.highlight_num}}</div>
                </div>
                <div class="word">根据伙伴之间互动高光来选拔展示</div>
              </div>
            </div>

            <!-- 3 -->
            <div class="dayNum">{{yesterdayUser.day}}</div>

            <!--发言-->
            <div v-if="yesterdayUser.fyUser" @click="onClickDayUser(yesterdayUser.fyUser.user_id)">
              <a class="dayName">@{{yesterdayUser.fyUser.user_name}}</a>
              <div
                class="dayWrod"
              >{{yesterdayUser.fyUser.num}} 发言 · {{yesterdayUser.fyUser.introduce}}</div>
            </div>

            <!--发布动态-->
            <div v-if="yesterdayUser.tUser" @click="onClickDayUser(yesterdayUser.tUser.user_id)">
              <a class="dayName">@{{yesterdayUser.tUser.user_name}}</a>
              <div
                class="dayWrod"
              >{{yesterdayUser.tUser.num}} 动态 · {{yesterdayUser.tUser.introduce}}</div>
            </div>

            <!--播放debut-->
            <div v-if="yesterdayUser.pUser" @click="onClickDayUser(yesterdayUser.pUser.user_id)">
              <a class="dayName">@{{yesterdayUser.pUser.user_name}}</a>
              <div
                class="dayWrod"
              >{{yesterdayUser.pUser.num}} 播放Debut · {{yesterdayUser.pUser.introduce}}</div>
            </div>

            <!--查看全部发言最多-->
            <div v-if="yesterdayUser.cUser" @click="onClickDayUser(yesterdayUser.cUser.user_id)">
              <a class="dayName">@{{yesterdayUser.cUser.user_name}}</a>
              <div
                class="dayWrod"
              >{{yesterdayUser.cUser.num}} 活跃 · {{yesterdayUser.cUser.introduce}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 40px;"
         class="loading"
         v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(246, 246, 246, 0.8)"
    ></div>
  </div>
</template>

<script>
import Topheader from "../components/header"; //上传图片
export default {
  name: "App",
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      name: "",
      email: "",
      passWord: "",
      postNum: 0,
      postWord: "", //post,发送
      homePhotoUpNum: 1, //tab
      upPictrue: false, //上传图片隐藏

      dialogImageUrl: "",
      dialogVisible: false, //上传图片
      content:"",//textarea文字
        imgs_id:[],//图片id
      textareaL:'',//textarea长度
      Inform: {}, //公告信息
      yesterdayUser: {}, //昨日人物
      highlightInfo: {}, //大赏推荐
      rmdInfo: {}, //推荐用户
      list:[],
        page:1,
        page_num:5,
        loading: false,
        loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
    };
  },
    mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#CBCBCB");
  },
  created() {
      this.getList();//获取列表
    this.getInform(); //获取公告
    this.getYesterdayUser(); //获取昨日人物
    this.getHighlightInfo(); //大赏信息
    this.getRmdInfo(); //推荐用户
      window.addEventListener("scroll", this.onScroll);
  },
  methods: {
      //去看全部
      toSeeinterflow(key){
         let _this=this;
        this.$router.push({
            path:'/seeinterflow',
            query:{
                id:_this.list[key].id
            }
        });
      },
      //点击高光
      onHighlight(key){
          let _this=this;
          let id = _this.list[key].id;
          _this.common.request('api/dynamic/highlight',{id:id},function (res) {
              if(res.status == 200){
                  _this.$message({
                      message: res.message,
                      type: 'success',
                      duration: 1500,
                      center: true,
                      onClose:function (res) {
                      }
                  });
                  _this.list[key].highlight_num=res.data.highlight_num;//
              }
          },'post')
      },
      //留言
      subInterflow(key){
          let _this=this;
          let data={
              dynamic_id:_this.list[key].id,
              content:_this.list[key].interflowContent,
              page_num:3
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
                  _this.list[key].leave_num=res.data.leave_num;
                  _this.list[key].leaveList=res.data.leaveList;//更新发言
                  _this.list[key].interflowContent=null;
              }
          },'post')
      },
      getList(){
        let _this=this;
        _this.page=1;
        let data={
            page:_this.page,
            page_num:_this.page_num
        };
        _this.common.request('api/dynamic/homeList',data,function (res) {
          if(res.status == 200){
              _this.list=res.data.list;
          }
        })
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
              let _this=this;
              if (_this.loadingType != 0) {
                  return;
              }
              _this.loadingType = 1;
              _this.loading=true;
              _this.page++;
              let list=[];
              let data={
                  page:_this.page,
                  page_num:_this.page_num
              };
              _this.common.request('api/dynamic/homeList',data,function (res) {
                  if(res.status == 200){
                      list=res.data.list;//请求数据
                      _this.loading=false;
                      if (list.length <=0) {
                          _this.loadingType = 2;
                          return;
                      }
                      _this.list = _this.list.concat(list);
                      _this.loadingType = 0;
                  }
              });

          }
      }
,
      //获取 长度
  textareaF(){
    //this.textareaL=this.content.length;
  },
    //获取推荐用户
    getRmdInfo() {
      let _this = this;
      _this.common.request("api/user/rmdInfo", {}, function(res) {
        if (res.status == 200) {
          _this.rmdInfo = res.data;
        }
      });
    },
    //获取大赏信息
    getHighlightInfo() {
      let _this = this;
      _this.common.request("api/user/highlightInfo", {}, function(res) {
        if (res.status == 200) {
          _this.highlightInfo = res.data;
        }
      });
    },
    //去用户主页
    toUserInfo(id) {
      this.$router.push({
        path: "/userInfo",
        query: {
          id: id
        }
      });
    },
    //点击昨日人物
    onClickDayUser(id) {
      let _this = this;
      _this.common.request("api/user/onClickDayUser",{ id: id },function(res) {},"post"
      );
      _this.toUserInfo(id);
    },
    //发布动态
    dynamicPost() {
      let _this = this;
      let type = this.upPictrue ? 2 : 1; //默认发布纯文字
      _this.common.request(
        "api/dynamic/add",
        { content: _this.content, type: type,imgs_id:_this.imgs_id },
        function(res) {
          if (res.status == 200) {
            _this.$message({
              message: res.message,
              type: "success",
              duration: 2500,
              center: true,
              onClose: function(res) {
                //
                _this.content = null;
                _this.upPictrue=false;
                _this.homePhotoUpNum=1;
                _this.getList();//获取列表
              }
            });
          }
        },
        "post"
      );
    },
    //获取公告
    getInform() {
      let _this = this;
      _this.common.request("api/inform/one", {}, function(res) {
        if (res.status == 200) {
          _this.Inform = res.data;
        }
      });
    },
    //关闭公告
    closeInform() {
      let _this = this;
      _this.common.request(
        "api/inform/off",
        { id: _this.Inform.id },
        function(res) {
          if (res.status == 200) {
            _this.Inform = {};
          }
        },
        "post"
      );
    },
    //获取昨日人物
    getYesterdayUser() {
      let _this = this;
      _this.common.request("api/userClickNum/yesterdayUser", {}, function(res) {
        if (res.status == 200) {
          _this.yesterdayUser = res.data;
        }
      });
    },

    //post
    homePhotoUP(num) {
      let _this = this;
      _this.homePhotoUpNum = num;
      if (num == 2) {
        _this.upPictrue = true;
      } else if (num == 1) {
        _this.upPictrue = false;
      }
    },

    //关闭上传图片
    close() {
      this.upPictrue = false;
      this.homePhotoUpNum = 1;
    },

    // 删除图片
    handleRemove(file, fileList) {
      let imgs_id=[];
      for (var i=0;i<fileList.length;i++){
          imgs_id[i]=fileList[i].response;//获得新的图片id
      }
      this.imgs_id=imgs_id;//保存数据
    },
      //上传接口图片
      handleAvatarSuccess(res, file) {
          this.imgs_id.push(res.data.id)
      },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
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

.toAll{
  cursor: pointer;
}
.toAll:hover{
  text-decoration: underline;
}
.head_body {
  display: flex;
  justify-content: flex-start;
}

.home {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .left {
    width: 186px;
    .name {
      margin-bottom: 10px;
      cursor: pointer;
      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
      }
      .names {
        color: #353535;
      }
    }
    .name:hover {
      text-decoration: underline;
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
      cursor: pointer;
      position: relative;
    }
    .word:hover {
      // border-bottom: 1px solid #d6d6d6;
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
      color: #000;
      font-size: 14px;
      height: 54px;
      outline: none;
      resize: none;
      width: 100%;
      border: none;
    }
  }
  .post {
    .flexSBetween;
    border-top: 1px solid #d6d6d6;
    padding: 14px;
    position: relative;
    .upPicture {
      background: #fff;
      box-shadow: 0px 5px 8px 0px rgba(78, 78, 78, 1);
      position: absolute;
      top: 59px;
      left: 14px;
      z-index: 10;
      width: 278px;
      height: 256px;
      padding: 2px;
    }

    .pictureNum {
      .flexSBetween;
      padding: 8px 2px;
      .num {
        color: #373737;
        font-size: 16px;
      }
      .close {
        background: #c5c5c5;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .picture {
      color: #787878;
      font-size: 14px;
    }
    .button {
      color: #15a3f5;
      font-size: 14px;
      width: 62px;
      height: 26px;
      line-height: 26px;
      background: #e8e8e8;
      border-radius: 13px;
      text-align: center;
      cursor: pointer;
    }
    .button.active {
      color: #fff;
      background: #15a3f5;
    }
    .button:hover {
      color: #fff;
      background: #15a3f5;
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
    cursor: pointer;
  }
  .left {
    width: 94px;
    margin-right: 14px;
    img {
      width: 94px;
      height: 94px;
      background: #a6a6a6;
    }
  }
  .right {
    .tit {
      color: #1c1c1c;
      font-size: 20px;
      font-weight: bold;
      .oneLines;
      height: 25px;
    }
    .word {
      color: #1c1c1c;
      font-size: 16px;
      height: 38px;
      margin-top: 15px;
      margin-bottom: 9px;
      .twoLines;
    }
    .smallWord {
      color: #7f7f7f;
      font-size: 14px;
      height: 20px;
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
    .flexStart;
    border-top: 1px solid #e6e5e5;
    padding: 14px 0;
    margin: 0 14px;
    .icon {
      width: 22px;
      height: 22px;
      background: #c6c6c6;
      margin-right: 15px;
      cursor: pointer;
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
  background: #fff;
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
  .allPeople {
    margin-top: 14px;
    display: flex;
    justify-content: flex-start;
    .name {
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
        display: inline-block;
      }
    }
    .HLightImgNum {
      .flexStart;
      .HLightImg {
        margin-left: 17px;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          margin-left: -17px;
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
// 上传图片
.avatar-uploader {
  .flexSBetween;
}
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
  color: #fff;
  background: #d7d7d7;
  width: 66px;
  height: 66px;
  line-height: 66px;
  text-align: center;
}
.avatar {
  width: 66px;
  height: 66px;
  display: block;
}
</style>