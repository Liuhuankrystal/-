<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100">
      <div class="seeinterflow">
        <div class="left">
          <div class="Img" v-if="info.info.type == 3">
            <el-image style="width: 600px; height: 600px" v-for="item in info.info.imgList" :src="item"></el-image>
          </div>

          <div class="Img" v-else-if="info.info.type == 2">
            <el-carousel :interval="5000" arrow="always" height="600px">
              <el-carousel-item v-for="item in info.info.imgList">
                <el-image style="width: 600px; height: 600px" :src="item"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- 留言 -->
          <div class="word">
            {{info.info.content}}
          </div>
          <!--Highlight  -->
          <div class="HeightLight">
            <div class="nameAll" @click="onHighlight()">
              <span v-if="info.info.is_highlight"></span>
              <span v-else></span>
              <div class="name">Highlight</div>
            </div>
            <div class="num">{{info.info.highlight_num}}</div>
          </div>

          <!-- 头像 -->
          <div class="headerImgAll">
            <div class="hederImg" @click="toUserInfo(info.info.user_id)">
              <img style="width: 54px; height: 54px;border-radius: 50%;"  :src="info.info.head_url" alt="">
            </div>
            <div class="nameS">
              <div class="nameWord">{{info.info.user_name}}</div>
              <div class="time">{{info.info.create_time}}</div>
            </div>
          </div>

          <!-- 发布者 -->
          <div class="published">
            <div class="times">Published on {{info.info.create_time}}</div>
            <div class="Massege">
              <div class="msgAll">
                <div class="tits">发布者</div>
                <div class="conts">{{info.info.user_name}}</div>
              </div>
              <div class="msgAll">
                <div class="tits">类型</div>
                <div class="conts">{{info.info.type_text}}</div>
              </div>
              <div class="msgAll">
                <div class="tits">版权标准</div>
                <div class="conts">Woshuoxia图像</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="tit">
            <div class="titWord" :class="tabActive==1?'active':''" @click="tab(1)">发言</div>
            <div class="titWord" :class="tabActive==2?'active':''" @click="tab(2)">我和Ta</div>
          </div>
          <!-- textarea -->
          <div class="Textarea" v-if="tabActive==1">
            <textarea   @input="textareaWordL"
             cols="30" rows="10" placeholder="您有什么说一说…" v-model="textareaWord"></textarea>
          </div>
          <!-- post -->
          <div class="postAll" v-if="tabActive==1">
            <div class="left">
              <div class="num">共有{{info.info.leave_num}}条发言和互动</div>
            </div>
            <div class="right">
              <div class="postBtn" @click="subInterflow()" :class="textareaLength>0?'active':''">post</div>
            </div>
          </div>

          <!-- talkMessage -->
          <div class="talkMessage">

            <div class="message" v-for="(vo,key) in info.list">

              <!--发言信息-->
              <div class="big messageStyle">
                <div class="messageleft">
                  <div class="img" @click="toUserInfo(vo.user_id)">
                    <img :src="vo.head_url" alt />
                  </div>
                </div>
                <div class="right">
                  <div class="nameTime">
                    <div class="name">{{vo.user_name}}</div>
                    <div class="time">{{vo.create_time}}</div>
                  </div>
                  <div class="wordCont">
                    {{vo.content}}
                  </div>
                </div>
              </div>
              <!--回复信息-->
              <div class="small">
                <!-- 1 -->
                <div class="messageStyle smallMore" v-for="(v,k) in vo.children" ref="msgHeight">
                  <div class="messageleft">
                    <div class="blueLine" :style="{height:MsgHeight +'px'}"></div>
                    <div class="img" @click="toUserInfo(v.user_id)">
                      <img :src="v.head_url" alt />
                    </div>
                  </div>
                  <div class="right">
                    <div class="nameTime">
                      <div class="name">{{v.user_name}}</div>
                      <div class="time">{{v.create_time}}</div>
                    </div>
                    <div class="wordCont">
                      {{v.content}}
                    </div>
                  </div>
                </div>

              </div>

              <div class="speak" style="text-align: center" v-if="vo.children.length > 0">
                <span v-if="vo.page_get == false">已全部加载完毕</span>
                <span v-else @click="getList2(key)">查看更多发言</span>
              </div>

            </div>

          </div>

          <div class="speak" v-if="page_get" @click="getList1()">查看更多发言</div>
          <div class="speak" v-else>已全部加载完毕</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topheader from "../components/header"; //上传图片

export default {
  name: "seeinterflow",
  components: {
    Topheader
  },
  data() {
    return {
      tabActive: 1, //tab切换
      MsgHeight: "", //获取元素高度
      textareaWord:'',// textare文字
      textareaLength:"",// textare长度
        page:1,//
        page_get:true,
        info:{
            info:{

            },
            list:[]
        }
    };
  },
    watch:{
        // 方法1
        '$route' (to, from) { //监听路由是否变化
            this.id=this.$route.query.id;
            this.getInfo();
        }
    },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  },
    created(){
      this.id=this.$route.query.id;
      this.getInfo();
    },
  methods: {
      toUserInfo(id){
        this.$router.push({
            path:'/userInfo',
            query:{
                id:id
            }
        })
      },
    //tab切换
    tab(num) {
        this.page_get=true;
        this.page=1;
      if (num == 1) {
        this.tabActive = 1;
        this.getInfo();//查看所有
      } else {
        this.tabActive = 2;
        this.getMeAndTa();//只看我和他
      }
    },
      //获取信息
      getInfo(){
        let _this=this;
        _this.common.request('api/dynamic/info',{id:_this.id},function (res) {
            if(res.status == 200){
                _this.info=res.data;
            }
        })
      },
      //所有请求最多（）
      getList1(){
        let _this=this;
        if(!_this.page_get){
            return;
        }
        _this.page++;
        let data={
            id:_this.info.info.id,
            page:_this.page
        };

        //只看我和她
          if(_this.tabActive == 2){
              data.type =2;
          }
        _this.common.request('api/dynamicLeave/listAll',data,function (res) {
            if(res.status == 200){
                let list=res.data.list;//请求数据
                _this.info.list=_this.info.list.concat(list);
                if(list.length < 10){
                    _this.page_get=false;
                }
            }
        })
      },
      //所有请求回复信息
      getList2(key){
          let _this=this;
          if(_this.info.list[key].page_get == false){
              return;
          }
          if(_this.info.list[key].page){
              _this.info.list[key].page++;
          }else {
              _this.info.list[key].page=2;
          }
          let data={
              id:_this.info.info.id,
              page:_this.info.list[key].page,
              leavel_id:_this.info.list[key].id
          };

          //只看我和她
          if(_this.tabActive == 2){
              data.type =2;
          }
          _this.common.request('api/dynamicLeave/listAll',data,function (res) {
              if(res.status == 200){
                  let list=res.data.list;//请求数据
                  _this.info.list[key].children=_this.info.list[key].children.concat(list);
                  if(list.length < 2){
                      _this.info.list[key].page_get=false;
                  }
              }
          })
      },
      //点击高光
      onHighlight(){
          let _this=this;
          let id = _this.info.info.id;
          _this.common.request('api/dynamic/highlight',{id:id},function (res) {
              if(res.status == 200){
                  _this.$message({
                      message: res.message,
                      type: 'success',
                      duration: 1500,
                      center: true
                  });
                  _this.info.info.highlight_num=res.data.highlight_num;//
              }
          },'post')
      },
      //留言
      subInterflow(){
          let _this=this;
          let data={
              dynamic_id:_this.info.info.id,
              content:_this.textareaWord
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
                  _this.textareaWord=null;
                  _this.getInfo();//重新获取一下信息

              }
          },'post')
      },
      //查看我和他
      getMeAndTa(){
        let _this=this;
        let data={
            id:_this.info.info.id,
            type:2,
        };
        _this.common.request('api/dynamicLeave/listAll',data,function (res) {
            if(res.status == 200){
                _this.info.list=res.data.list;
            }
        })
      },

  //监听textares长度
  textareaWordL(){
    this.textareaLength=this.textareaWord.length;
  },

  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/index.less";

.seeinterflow {
  display: flex;
  justify-content: flex-start;
  margin-top: 17px;
  .left {
    width: 600px;
    margin-right: 24px;
    .word {
      color: #1c1c1c;
      font-size: 14px;
      line-height: 24px;
      .thteeLines;
      height: 64px;
    }

    // Highlight
    .HeightLight {
      border-bottom: 1px solid #dedede;
      padding-bottom: 18px;
      .flexEnd;
      .nameAll {
        .flexStart;
        span {
          width: 18px;
          height: 18px;
          background: #166593;
          margin-right: 11px;
        }
        .name {
          color: #166593;
          font-size: 16px;
        }
      }
      .num {
        color: #7f7f7f;
        font-size: 22px;
        margin-left: 16px;
      }
    }

    // 头像
    .headerImgAll {
      border-bottom: 1px solid #dedede;
      padding: 18px;
      .flexSBetween;
      .nameS {
        .nameWord {
          margin-left: 15px;
          color: #7f7f7f;
          font-size: 18px;
        }
        .time {
          color: #7f7f7f;
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }

    // 发布者
    .published {
      border-bottom: 1px solid #dedede;
      padding: 23px 0;
      .times {
        color: #575757;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .Massege {
        .msgAll {
          .flexStart;
          color: #797979;
          font-size: 14px;
          padding-bottom: 13px;
          .tits {
            width: 56px;
            margin-right: 39px;
          }
        }
      }
    }
  }
  .right {
    width: 474px;
    //tit
    .tit {
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 15px;
      .flexStart;
      .titWord {
        color: #000;
        font-size: 16px;
        margin-right: 48px;
        cursor: pointer;
        height: 32px;
      }
      .titWord.active {
        color: #166593;
      }
      .titWord:hover {
        height: 31px;
        border-bottom: 1px solid #166593;
      }
    }
    // textarea
    .Textarea {
      margin-top: 10px;
      textarea {
        color: #000;
        font-size: 1px;
        height: 40px;
        resize: none;
        width: 100%;
        padding: 3px;
        border: none;
        outline: none;
      }
    }

    // post
    .postAll {
      .flexSBetween;
      padding: 16px 0;
      border-bottom: 1px solid #eee;
      .left {
        .num {
          color: #7f7f7f;
          font-size: 14px;
        }
      }
      .right {
        .flexEnd;
        .postBtn {
          color: #fff;
          font-size: 15px;
          width: 76px;
          height: 30px;
          line-height: 30px;
          background: #b0b0b0;
          text-align: center;
          .border-radius(15px);
          cursor: pointer;
        }
        .postBtn.active{
          background: #188DDF;
        }
        .postBtn:hover{
          background: #188DDF;
        }
      }
    }

    // talkMessage
    .talkMessage {
      margin-top: 28px;
      overflow-y: scroll;
      height: 600px;
      .message {
        .big {
        }
        .messageStyle {
          display: flex;
          justify-content: flex-start;
          .messageleft {
            margin-right: 6px;
            position: relative;
            .img {
              .imgNoCut(54px;54px);
              img {
                .border-radius(50%);
              }
            }
            .blueLine {
              .positionALT(27px;0);
              width: 2px;
              background: #2287cd;
            }
          }

          .right {
            .nameTime {
              .flexStart;
              margin-bottom: 7px;
              .name {
                color: #1d1d1d;
                font-size: 16px;
                margin-right: 13px;
              }
              .time {
                color: #7f7f7f;
                font-size: 14px;
              }
            }
            .wordCont {
              color: #000;
              font-size: 14px;
              margin-bottom: 20px;
            }

          }
        }

        .small {
          margin-left: 52px;
        }

        // .smallMore {
        //   border-left: 1px solid #2287CD;
        // }
      }
    }
  }
}
.speak {
  color: #7f7f7f;
  font-size: 14px;
  cursor: pointer;
}
  .speak:hover{
    text-decoration: underline;
  }
</style>