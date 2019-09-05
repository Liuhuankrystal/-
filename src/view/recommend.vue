<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100" :class="imgBigState==true?'imgBigTan':''">
      <div class="recommendOne">
        <ul>
          <li v-for="(vo,key) in list" :key="vo.id">

            <!-- 4张图 -->
            <div v-if="vo.imgList.length == 4" class="topImg topImgOne">
              <div class="left">
                <el-image
                  @click="bigImg(vo.imgList[0].id)"
                  style="width: 438px; height: 435px"
                  :src="vo.imgList[0].img_url"
                ></el-image>
              </div>
              <div class="center">
                <el-image
                  @click="bigImg(vo.imgList[1].id)"
                  style="width: 222px; height: 216px"
                  :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                  @click="bigImg(vo.imgList[2].id)"
                  style="width: 222px; height: 216px"
                  :src="vo.imgList[2].img_url"
                ></el-image>
              </div>
              <div class="right">
                <el-image
                  @click="bigImg(vo.imgList[3].id)"
                  style="width: 438px; height: 435px"
                  :src="vo.imgList[3].img_url"
                ></el-image>
              </div>
            </div>

            <!--5张图-->
            <div v-if="vo.imgList.length == 5" class="topImg topImgEigth">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width: 458px; height:456px"
                        :src="vo.imgList[0].img_url"
                ></el-image>

              </div>

              <div class="right">
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 320px; height: 228px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width: 320px; height: 228px"
                        :src="vo.imgList[2].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[3].id)"
                        style="width: 320px; height: 228px"
                        :src="vo.imgList[3].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[4].id)"
                        style="width: 320px; height: 228px"
                        :src="vo.imgList[4].img_url"
                ></el-image>
              </div>
            </div>

            <!--6张图-->
            <div v-if="vo.imgList.length == 6" class="topImg topImgSeven">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[0].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
              </div>
              <div class="center">
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width:330px; height: 434px"
                        :src="vo.imgList[2].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[3].id)"
                        style="width: 330px; height: 434px"
                        :src="vo.imgList[3].img_url"
                ></el-image>

              </div>
              <div class="right">
                <el-image
                        @click="bigImg(vo.imgList[4].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[4].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[5].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[5].img_url"
                ></el-image>
              </div>
            </div>

            <!--7张图-->
            <div v-if="vo.imgList.length == 7" class="topImg topImgTwo">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[0].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[2].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[3].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[3].img_url"
                ></el-image>
              </div>
              <div class="center">
                <el-image style="width:445px; height: 436px" @click="bigImg(vo.imgList[4].id)" :src="vo.imgList[4].img_url"></el-image>
              </div>
              <div class="right">
                <el-image
                        @click="bigImg(vo.imgList[5].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[5].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[6].id)"
                        style="width: 217px; height: 217px"
                        :src="vo.imgList[6].img_url"
                ></el-image>
              </div>
            </div>

            <!--8张图-->
            <div v-if="vo.imgList.length == 8" class="topImg topImgSix">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width:182px; height: 182px"
                        :src="vo.imgList[0].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 182px; height: 183px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width: 182px; height: 182px"
                        :src="vo.imgList[2].img_url"
                ></el-image>

                <div class="imgLeft" @click="bigImg(vo.imgList[3].id)">
                  <img :src="vo.imgList[3].img_url" alt />
                </div>
              </div>

              <div class="right">
                <div class="imgRight" @click="bigImg(vo.imgList[4].id)">
                  <img :src="vo.imgList[4].img_url" alt />
                </div>
                <el-image
                        @click="bigImg(vo.imgList[5].id)"
                        style="width: 182px; height: 182px"
                        :src="vo.imgList[5].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[6].id)"
                        style="width: 182px; height: 182px"
                        :src="vo.imgList[6].img_url"
                ></el-image>
                <el-image style="width: 182px; height: 182px" @click="bigImg(vo.imgList[7].id)" :src="vo.imgList[7].img_url"></el-image>
              </div>
            </div>

            <!--9张图1-->
            <div v-if="vo.imgList.length == 9" class="topImg topImgThere">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width:328px; height: 328px"
                        :src="vo.imgList[0].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[2].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[3].id)"
                        style="width: 110px; height: 108px"
                        :src="vo.imgList[3].img_url"
                ></el-image>
              </div>
              <div class="center">
                <div>
                  <el-image
                          @click="bigImg(vo.imgList[4].id)"
                          style="width: 442px; height: 437px"
                          :src="vo.imgList[4].img_url"
                  ></el-image>
                </div>
              </div>
              <div class="right">
                <div class="top">
                  <el-image
                          @click="bigImg(vo.imgList[5].id)"
                          style="width: 108px; height: 108px"
                          :src="vo.imgList[5].img_url"
                  ></el-image>
                  <el-image
                          @click="bigImg(vo.imgList[6].id)"
                          style="width: 108px; height: 108px"
                          :src="vo.imgList[6].img_url"
                  ></el-image>
                  <el-image
                          @click="bigImg(vo.imgList[7].id)"
                          style="width: 108px; height: 108px"
                          :src="vo.imgList[7].img_url"
                  ></el-image>
                </div>
                <div class="bottom">
                  <el-image style="width: 326px; height: 328px" @click="bigImg(vo.imgList[8].id)" :src="vo.imgList[8].img_url"></el-image>
                </div>
              </div>
            </div>

            <!--9张图2-->
            <div v-if="vo.imgList.length > 9" class="topImg topImgFour">
              <div class="left">
                <el-image
                        @click="bigImg(vo.imgList[0].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[0].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[1].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[1].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[2].id)"
                        style="width: 110px; height: 108px"
                        :src="vo.imgList[2].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[3].id)"
                        style="width:328px; height: 332px"
                        :src="vo.imgList[3].img_url"
                ></el-image>
              </div>
              <div class="center">
                <div>
                  <el-image
                          @click="bigImg(vo.imgList[4].id)"
                          style="width: 442px; height: 441px"
                          :src="vo.imgList[4].img_url"
                  ></el-image>
                </div>
              </div>
              <div class="right">
                <el-image
                        @click="bigImg(vo.imgList[5].id)"
                        style="width: 326px; height: 332px"
                        :src="vo.imgList[5].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[6].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[6].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[7].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[7].img_url"
                ></el-image>
                <el-image
                        @click="bigImg(vo.imgList[8].id)"
                        style="width: 108px; height: 108px"
                        :src="vo.imgList[8].img_url"
                ></el-image>
              </div>
            </div>

            <!--公共信息-->
            <div class="wordCont">
              <div class="titAll">
                <div class="left">{{vo.introduce}}</div>
                <div class="right">
                  <div class="iconAll">

                    <div v-if="vo.is_linker" class="icon"  @click="onLink(key)"></div>
                    <div v-else class="icon"  @click="onLink(key)"></div>
                    <div class="word" style="margin-right:30px"  @click="onLink(key)">Link</div>

                    <div v-if="vo.is_follow" class="icon" @click="onFollow(key)"></div>
                    <div v-else class="icon"  @click="onFollow(key)"></div>

                    <div class="word"  @click="onFollow(key)">Follow</div>
                  </div>
                </div>
              </div>

              <!--  -->
              <div class="name">{{vo.name}} · {{vo.grbq}}</div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">Live in {{vo.area_text}} from {{vo.state_text}}</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">{{vo.jnk}}</div>
              </div>
              <div class="message">
                <div class="icon"></div>
                <div class="word">{{vo.achievement}}</div>
              </div>

              <div class="message">
                <div class="icon"></div>
                <div class="word">
                  <div class="web_url" @click="common.openUrl(vo.web_url)">{{vo.web_url}}</div>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>

    <!-- 弹窗 -->

    <div class="bg" v-show="imgBigState" @click="clsoeImgBig()"></div>
    <div class="imgBig" v-show="imgBigState">

      <div class="imgBigAll">
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
              <img v-if="showInfo.info.is_highlight" src alt @click="onHighlight(showInfo.info.id)" />
              <img v-else src alt @click="onHighlight(showInfo.info.id)" />
              <span>{{showInfo.info.highlight_num}}次Highlight</span>
            </div>
            <div class="time">{{showInfo.info.create_time}}</div>
          </div>
          <div class="interFlow">
            <input type="text" v-model="content" v-on:keyup.enter="subInterflow(showInfo.info.id)" placeholder="Interflow…" />
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
  name: "recommend",
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#CBCBCB");
  },
  created() {
      this.getList();
  },
  data() {
    return {
      for1: "for1",
      for2: "for2",
      imgBigState: false, //弹窗
        list:[],
        showInfo:{
            info:{},
            leaveList:[]
        },
        content:null
    };
  },
  //方法定义
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
      subInterflow(id){
          let _this=this;
          let data={
              dynamic_id:id,
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
    //显示弹窗
    bigImg(id) {
        let _this=this;
        _this.common.request('api/dynamic/grInfo',{id:id},function (res) {
            _this.imgBigState = true;
            _this.showInfo=res.data;
            console.log(res);
        });
    },
    //关闭弹窗
    clsoeImgBig() {
      this.imgBigState = false;
    },
      getList(){
        let _this=this;
        _this.common.request('api/user/rmdList',{},function (res) {
            if(res.status == 200){
                _this.list=res.data.list;
            }
        })
      },
      //点击高光
      onHighlight(id){
          let _this=this;
          _this.common.request('api/dynamic/highlight',{id:id},function (res) {
              if(res.status == 200){
                  _this.showInfo.info.highlight_num=res.data.highlight_num;//
              }
          },'post')
      },
      //link操作
      onLink(key) {
          let _this = this;
          let id = _this.list[key].id;
          _this.common.request(
              "api/userLinker/handel",
              { id:id },
              function(res) {
                  if (res.status == 200) {
                      _this.list[key].is_linker=!_this.list[key].is_linker;
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
      onFollow(key) {
          let _this = this;
          let id = _this.list[key].id;
          _this.common.request(
              "api/userFollow/handel",
              { id:id },
              function(res) {
                  if (res.status == 200) {
                      _this.list[key].is_follow=!_this.list[key].is_follow;

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
  }
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
.recommendOne {
  margin-top: 22px;
  ul {
    li {
      margin-bottom: 66px;
      background: #fff;
      .topImgOne {
        .flexStart;
        .left {
          width: 438px;
          height: 438px;
        }
        .center {
          padding-left: 1px;
          display: flex;
          flex-wrap: wrap;
          .el-image:first-child {
            padding-bottom: 1px;
            margin-top: -3px;
          }
          .el-image {
            padding-right: 1px;
          }
        }
        .right {
          width: 438px;
          height: 438px;
        }
      }
      .topImgTwo {
        .flexStart;
        .left {
          display: flex;
          flex-wrap: wrap;
          .el-image {
            padding-right: 1px;
            padding-bottom: 1px;
          }
          .el-image:nth-child(1),
          .el-image:nth-child(2) {
            margin-top: -3px;
          }
        }
        .center {
          .el-image:nth-child(1) {
            margin-left: -2px;
            padding-right: 1px;
          }
        }
        .right {
          display: flex;
          flex-wrap: wrap;
          .el-image:nth-child(1) {
            padding-bottom: 1px;
            margin-top: -4px;
          }
        }
      }
      .topImgThere {
        .flexStart;
        .left {
          padding-left: 1px;
          display: flex;
          flex-wrap: wrap;
          .el-image:first-child {
            padding-bottom: 1px;
            margin-top: -5px;
          }
          .el-image {
            padding-right: 1px;
          }
        }
        .center {
          .el-image {
            padding-right: 1px;
          }
        }
        .right {
          .top {
            .flexStart;
            .el-image {
              padding-right: 1px;
            }
          }
        }
      }

      .topImgFour {
        .flexStart;
        .left {
          margin-top: -4px;
          display: flex;
          flex-wrap: wrap;
          .el-image {
            padding-right: 1px;
          }
        }
        .center {
          .el-image {
            padding-right: 1px;
          }
        }
        .right {
          display: flex;
          flex-wrap: wrap;
          .el-image {
            padding-right: 1px;
          }
          .el-image:first-child {
            padding-bottom: 1px;
            margin-top: -5px;
          }
        }
      }

      .topImgSix {
        .flexStart;
        .left {
          display: flex;
          flex-wrap: wrap;
          padding-left: 1px;
          .imgLeft {
            .imgNoCut(548px;263px);
          }
          .el-image {
            padding-right: 1px;
          }
        }

        .right {
          display: flex;
          flex-wrap: wrap;
          .imgRight {
            .imgNoCut(548px;263px);
            padding-bottom: 1px;
          }
          .el-image {
            padding-right: 1px;
            padding-top: 1px;
          }
        }
      }

      .topImgSeven {
        .flexStart;
        .left {
          display: flex;
          flex-wrap: wrap;
          .el-image {
            padding-right: 1px;
            padding-bottom: 1px;
          }
        }
        .center {
          display: flex;
          padding-right: 1px;
           .el-image {
            padding-right: 1px;
          }
          .ImgCenter {
            .imgNoCut(330px;436px);
          }
        }
        .right {
          display: flex;
          flex-wrap: wrap;
          .el-image:nth-child(1) {
            padding-bottom: 1px;
            margin-top: -4px;
          }
        }
      }

      .topImgEigth{
         .flexStart;
        .right{
           margin-top:-5px;

           display: flex;
          flex-wrap: wrap;
          padding:0 1px;

        }
      }
    }
  }
}

.wordCont {
  background: #fff;
  padding: 24px;
  .titAll {
    .flexSBetween;
    .left {
      color: #1c1c1c;
      font-size: 24px;
      font-weight: bold;
      width: 80%;
      .oneLines;
    }

    .right {
      .iconAll {
        .flexStart;
        margin-left: 30px;

        .icon {
          width: 18px;
          height: 18px;
          background: #c6c6c6;
          margin-right: 12px;
        }
        .word {
          color: #187eb9;
          font-size: 16px;
        }
      }
    }
  }

  .name {
    color: #7f7f7f;
    font-size: 16px;
    padding: 13px 0 20px 0;
  }
  .message {
    .flexStart;
    margin-bottom: 16px;
    .icon {
      background: #c6c6c6;
      width: 20px;
      height: 20px;
      margin-right: 22px;
    }
    .word {
      color: #1d1d1d;
      font-size: 14px;
    }
  }
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
    display: flex;
    justify-content: space-between;
    .imgBigR {
      width: 616px;
      height: 770px;
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
  left: 0;
}
  .web_url{
    cursor: pointer;
    color: blue;
  }
  .web_url:hover{
    text-decoration: underline;
  }
</style>