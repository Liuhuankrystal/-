<template>
  <div>
    <headerTwo title="watch"></headerTwo>

    <div class="w1100">
      <div class="editerB">
        <!-- 播放地址 -->
        <div class="adressAll">
          <div class="left">
            <div class="adressTit">播放地址：(仅支持优酷网)</div>
            <div class="adressInput">
              <input type="text" v-model="video_url" placeholder="请输入播放地址" />
            </div>
          </div>
          <div class="right">
            <div class="postBtn" @click="onPostBtn()">发布</div>
          </div>
        </div>

        <!-- 节目标题： -->
        <div class="program">
          <div class="tit">节目标题：</div>
          <div class="programInput">
            <input type="text" v-model="title" placeholder="请输入节目标题" />
          </div>
        </div>

        <!-- 栏目类型 -->
        <div class="ColumnType">
          <div class="left">
            <div class="titAll">
              <div class="tit">栏目类型：(如果您的节目是说明下期节目)</div>
              <div class="chose" :class="choseStates==true?'active':''" @click="choseF()">√</div>
              <div class="word">预告</div>
            </div>
            <div class="LabelAll">
              <div class="tit">标签：</div>
              <div class="input">
                <input type="text" placeholder="请输入标签" v-model="word" />
              </div>
              <div class="button" @click="tableS()">确定</div>
            </div>
          </div>
          <div class="right">
            <div class="addImgAll">
              <div class="tits">
                <span class="tit">添加封面图：</span>
                <span class="word">选择封面图</span>
              </div>
              <div class="img">
                <el-upload
                  class="avatar-uploader"
                  :action="common.uploadUrl()"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
          </div>
        </div>

        <!-- 标签 -->
        <div class="tableAll" v-if="list.length>0">
          <div class="tableAllLi">
            <div class="tables" v-for="(item,index) in list" :key="index">
              <div class="tit">{{item}}</div>
              <div class="img" @click="close(index)">X</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 您已发布的节目 -->

      <div class="publish">
        <div class="top">您已发布的节目</div>
        <div class="list" v-for="(vo,key) in debutList" :key="vo.id">
          <div class="left">
            <div class="time">
              <span>{{vo.create_time}}</span>
              <span>{{vo.click_user_num}} from woshuoxia people play</span>
            </div>
            <div class="tit">{{vo.title}}</div>
            <div class="table">
              <router-link to v-for="(v,k) in vo.label" :key="k">#{{v}}</router-link>
            </div>
            <div class="httpAdress" @click="toVideo(vo.video_url,vo.id)">{{vo.video_url}}{{vo.video_url}}</div>
          </div>

          <div class="right">
            <img :src="vo.img_url" alt />
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
import headerTwo from "../components/headerTwo"; //上传图片

export default {
  name: "editorBoard",
  components: {
    headerTwo
  },
  data() {
    return {
        loading: false,
        loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
        page:1,
        page_num:this.common.pageNum(),
      choseStates: false, //栏目类型 选中
      imageUrl: "", //上传图片
        img_id:'',
      word: "",
      list: [],
        debutList:[],//

        video_url:null,
        title:null,
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#CBCBCB");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  created() {
      this.getList();//获取我发布的列表
      window.addEventListener("scroll", this.onScroll);
  },
  methods: {
      //提交数据
      onPostBtn(){
        let _this=this;
        let data={
            video_url:_this.video_url,
            title:_this.title,
            img_id:_this.img_id,
            is_foreshow:_this.choseStates ? 1 : 2,
            label:_this.list
        };
        _this.common.request('api/debut/add',data,function (res) {
            if(res.status == 200){
                _this.$message({
                    message: res.message,
                    type: 'success',
                    duration: 1500,
                    center: true,
                    onClose:function (res) {
                        _this.initData();
                        _this.getList();
                    }
                });
            }
        },'post');
      },
      initData(){
          this.video_url=null;
          this.title=null;
          this.imageUrl=null;
          this.img_id=null;
          this.list=[];
      },
    //上传图片
    handleAvatarSuccess(res, file) {
        this.img_id = res.data.id;
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    //预告勾选
    choseF() {
      this.choseStates = !this.choseStates;
    },
    //监听input输入值
    tableS() {
        if(this.list.length >=20){
            this.$message({
                message: '抱歉最多添加20个标签',
                type: 'warning',
                duration: 2500,
                center: true
            });
            return;
        }
      let word = this.word;
      this.list.push(word);
      this.word=null;
    },
    //删除标签
    close(index) {
      // 用索引删除
      let that = this;
      that.list.splice(index, 1);
    },
      //获取我发布的列表
      getList(){
        let _this=this;
        _this.page=1;
          let data={
              page:_this.page,
              page_num:_this.page_num
          };
        _this.common.request('api/debut/myList',data,function (res) {
            if(res.status == 200){
                _this.debutList=res.data.list;
                console.log(res);
            }
        })
      },
      toVideo(url,id){
          this.clickDebut(id);
          window.open(url);
      },
      clickDebut(id){
          let _this=this;
          _this.common.request('api/debut/onClick',{id:id},function (res) {
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
              _this.common.request('api/debut/myList',data,function (res) {
                  if(res.status == 200){
                      list=res.data.list;//请求数据
                      _this.loading=false;
                      if (list.length <=0) {
                          _this.loadingType = 2;
                          return;
                      }
                      _this.debutList = _this.debutList.concat(list);
                      _this.loadingType = 0;
                  }
              });

          }
      }

  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/index.less";

.editerB {
  background: #fff;
  padding: 20px;
}

// 播放地址
.adressAll {
  margin-bottom: 28px;
  .flexSBetween;
  .left {
    .adressTit {
      color: #818181;
      font-size: 16px;
      margin-bottom: 15px;
    }
    .adressInput {
      background: #f3f3f3;
      width: 750px;
      height: 46px;
      border-radius: 6px;
      .border-radius(6px);
      input {
        padding: 15px 16px;
        color: #1d1d1d;
        font-size: 14px;
        background: #f3f3f3;
      }
    }
  }
  .right {
    .postBtn {
      width: 62px;
      height: 26px;
      line-height: 26px;
      cursor: pointer;
      background: #188ddf;
      border-radius: 13px;
      color: #fff;
      font-size: 14px;
      text-align: center;
    }
  }
}

// 节目标题：
.program {
  margin-bottom: 28px;
  .tit {
    color: #818181;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .programInput {
    background: #f3f3f3;
    width: 750px;
    height: 46px;
    border-radius: 6px;
    .border-radius(6px);
    input {
      padding: 15px 16px;
      color: #1d1d1d;
      font-size: 14px;
      background: #f3f3f3;
    }
  }
}

// 栏目类型

.ColumnType {
  .flexSBetween;
  .left {
    width: 50%;
    // titAll
    .titAll {
      margin-bottom: 12px;
      .flexStart;
      .tit {
        color: #818181;
        font-size: 16px;
        margin-right: 15px;
      }
      .chose {
        background: #7f7f7f;
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
      .chose.active {
        background: #4dd113;
      }
      .word {
        color: #1d1d1d;
        font-size: 14px;
        margin-left: 26px;
      }
    }

    //LabelAll
    .LabelAll {
      .flexStart;
      .tit {
        color: #818181;
        font-size: 16px;
        margin-right: 19px;
      }
      .input {
        width: 360px;
        height: 44px;
        background: #f3f3f3;
        border-radius: 6px;
        input {
          color: #1d1d1d;
          padding: 14px;
          width: calc(100% - 28px);
          font-size: 14px;
          background: #f3f3f3;
        }
      }
      .button {
        width: 62px;
        height: 26px;
        line-height: 26px;
        cursor: pointer;
        background: #188ddf;
        .border-radius(13px);
        margin-left: 19px;
        color: #fff;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .right {
    width: calc(50% - 100px);

    // addImgAll
    .addImgAll {
      .flexSBetween;
      position: relative;
      .tits {
        color: #818181;
        font-size: 16px;
        margin-right: 14px;
        .word {
          color: #3889c1;
          font-size: 16px;
        }
      }
      .img {
        position: absolute;
        top: -43px;
        right: 0;

        border: 1px solid #f3f3f3;
        .border-radius(6px);
        width: 140px;

        .avatar-uploader {
          width: 140px;
          height: 92px;
          line-height: 92px;
          text-align: center;
        }
        .avatar {
          .border-radius(6px);
          .imgNoCut(140px;92px);
        }
      }
    }
  }
}

//tableAll
.tableAll {
  margin-top: 18px;
  .tableAllLi {
    display: flex;
    flex-wrap: wrap;
    .tables {
      .flexSBetween;
      margin-bottom: 10px;
      margin-right: 14px;
      min-width: 120px;
      height: 18px;
      background: #404040;
      border-radius: 6px;
      padding: 14px;
      .tit {
        color: #fff;
        font-size: 14px;
      }
      .img {
        width: 16px;
        height: 16px;
        margin-left: 14px;
        line-height: 16px;
        background: #fff;
        color: #000;
        font-size: 14px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}

// 您已发布的节目
.publish {
  margin: 16px 0;

  background: #fff;
  padding: 20px;
  .top {
    color: #737373;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .list {
    margin-bottom: 68px;
    .flexSBetween;
    .left {
      max-width: 80%;
      overflow: -webkit-paged-x;
      .time {
        color: #4d4d4d;
        font-size: 16px;
        span {
          margin-right: 1px;
        }
      }
      .tit {
        color: #1c1c1c;
        font-size: 18px;
        margin: 16px 0;
      }
      .table {
        a {
          margin-right: 16px;
          color: #1d1d1d;
          font-size: 14px;
        }
      }
      .httpAdress {
        color: #7f7f7f;
        font-size: 18px;
        margin-top: 14px;
        cursor: pointer;
      }
        .httpAdress:hover{
          text-decoration: underline;
        }
    }
    .right{
      width: 182px;
      .imgNoCut(182px;112px); 
      .border-radius(8px);
    }
  }
}
</style>