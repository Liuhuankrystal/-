<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100" :class="bigIMgShow==true?'bgactive':''">
      <!-- 小图列表 -->
      <ul class="topPortrait">
        <li v-for="item in userList" @click="toUser(item.id)" :key="item.id">
          <div class="topImg">
            <img :src="item.head_url" alt />
          </div>
          <div class="name">{{item.name}}</div>
        </li>
      </ul>

      <!-- 大图列表 -->
      <div class="ImgAll">
        <el-row>
          <el-col class="ImgLi" :span="8" v-for="(vo,key) in highlightList" :key="vo.id">
            <div class="grid-content" @click="toBigInfo(key)">
              <div class="bigImg">
                <img :src="vo.img_url" alt />
              </div>
              <div class="NameNum">
                <div class="Name">{{vo.user_name}}</div>
                <div class="Num">{{vo.highlight_num}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div style="margin-top: 40px;"
         class="loading"
         v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(246, 246, 246, 0.8)"
    ></div>

    <!-- 弹窗 -->
    <div class="bg" v-show="bigIMgShow==true" @click="close()"></div>
    <div class="bigIMgShow" v-show="bigIMgShow==true">
      <div class="left">
        <div class="num">{{highlightInfo.highlight_num}}Highlight</div>
        <div class="wordTime">
          <div class="word">
            {{highlightInfo.content}}
          </div>
          <div class="time">{{highlightInfo.create_time}}</div>
        </div>
        <div class="nameImg">
          <div class="Img">
            <img :src="highlightInfo.head_url" alt />
          </div>
          <span>{{highlightInfo.user_name}}</span>
        </div>
      </div>
      <div class="right">
          <el-carousel arrow="always" height="622px">
            <el-carousel-item v-for="(item,key) in highlightInfo.imgList" :key="key">
              <el-image style="width:560px; height: 622px" :src="item"></el-image>
            </el-carousel-item>
          </el-carousel>
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
  name: "pointTime",
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },

  data() {
    return {
        loading: false,
        loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
        page:1,
        page_num:12,
      bigIMgShow: false, //弹窗
        userList:[],
        highlightList:[],//作品列表
        highlightInfo:{},//作品详情
    };
  },
   created(){
      this.getHighlightUserList();//用户列表
      this.getHighlightList();//作品列表
       window.addEventListener("scroll", this.onScroll);
   }
,
  methods: {
    //显示大图
    showBigImg() {
      this.bigIMgShow = true;
    },
    close() {
      this.bigIMgShow = false;
    },
      //获取推荐用户
      getHighlightUserList(){
        let _this=this;
        _this.common.request('api/user/highlightUserList',{},function (res) {
            if(res.status == 200){
                _this.userList=res.data.list;
            }
        })
      },
      //获取推荐作品
      getHighlightList(){
        let _this=this;
          _this.page=1;
          let data={
              page:_this.page,
              page_num:_this.page_num
          };
        _this.common.request('api/dynamic/highlightList',data,function (res) {
            if(res.status == 200){
                _this.highlightList=res.data.list;
            }
            console.log(res);
        })
      },
      //作品详情
      toBigInfo(key){
        let _this=this;
        let id = _this.highlightList[key].id;
        _this.common.request('api/dynamic/highlightInfo',{id:id},function (res) {
            if(res.status == 200){
                _this.highlightInfo=res.data;//详情信息
                _this.showBigImg()
                console.log(res);
            }
        })
      }
      ,
      toUser(id){
        this.$router.push({
            path:'/userInfo',
            query:{
                id:id
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
              _this.common.request('api/dynamic/highlightList',data,function (res) {
                  if(res.status == 200){
                      list=res.data.list;//请求数据
                      _this.loading=false;
                      if (list.length <=0) {
                          _this.loadingType = 2;
                          return;
                      }
                      _this.highlightList = _this.highlightList.concat(list);
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
.topPortrait {
  .flexStart;
  overflow: hidden;
  margin-top: 31px;
  li {
    text-align: center;
    margin-right: 48px;
  }
  .topImg {
    .imgNoCut(60px;60px);
    margin: 0 auto;
    background: #fff;
    padding: 2px;
    border: 1px solid #f7f7f7;
    border-radius: 50%;
  }
  .name {
    color: #1d1d1d;
    font-size: 14px;
    margin-top: 10px;
  }
}

.ImgAll {
  margin-top: 40px;
  .ImgLi {
    margin-bottom: 64px;
  }
}
.bigImg {
  .imgCut(354px;354px);
}
.NameNum {
  width: 354px;
  margin-top: 16px;
  color: #1d1d1d;
  font-size: 14px;
  .flexSBetween;
}
.bgactive {
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -550px;
}

// 弹窗
.bigIMgShow {
  width: 984px;
  height: 622px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -492px;
  margin-top: -311px;
  z-index: 101;
  .flexSBetween;
  .left {
    width: 370px;
    height: 572px;
    padding: 25px;
    position: relative;
    .num {
      .positionALT(25px;25px);
      color: #282a2b;
      font-size: 16px;
    }
    .wordTime {
      height: 485px;
    }
    .word {
      margin: 25px 0;
      height: calc(100% - 50px);
      overflow-y: auto;
      color: #1c1c1c;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    .time {
      color: #7f7f7f;
      font-size: 14px;
    }
    .nameImg {
      .positionALB(25px;25px;);
      span {
        color: #1d1d1d;
        font-size: 18px;
      }
      .flexStart;
      .Img {
        margin-right: 16px;
        .imgNoCut(60px;60px);
        .border-radius(50%);
      }
    }
  }
  .right {
    width:560px;
    height: 622px;
    // .imgNoCut(560px;622px;);
  }
}
</style>