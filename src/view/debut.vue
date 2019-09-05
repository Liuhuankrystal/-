<template>
  <div>
    <headerTwo :search_show="search_show" title="watch"></headerTwo>
    <!-- 展示用 -->
    <div class="top-body">

      <div class="cont-body" v-if="list1.length > 0" style="margin-top: 20px;">
      <p class="title">新鲜</p>
      <div class="content">
        <div class="cont-body1">
          <i class="el-icon-arrow-left" @click="onPrev(1)"></i>
          <div class="cont-body2">
            <div class="card-body" v-for="(vo,key) in list1" :key="vo.id">
              <div class="cardImg" @click="toVideo(vo.video_url,vo.id)">
                <img :src="vo.img_url" alt />
              </div>
              <p class="word">
                {{vo.title}}
              </p>
              <div class="author">
                <p>{{vo.user_name}}</p>
                <p>{{vo.time}}</p>
              </div>
            </div>
          </div>
          <i class="el-icon-arrow-right" @click="onNext(1)"></i>
        </div>
      </div>
    </div>

      <div class="cont-body" v-if="list2.length > 0" style="margin-top: 20px;">
        <p class="title">热门放送</p>
        <div class="content">
          <div class="cont-body1">
            <i class="el-icon-arrow-left" @click="onPrev(2)"></i>
            <div class="cont-body2">
              <div class="card-body" v-for="(vo,key) in list2" :key="vo.id">
                <div class="cardImg" @click="toVideo(vo.video_url,vo.id)">
                  <img :src="vo.img_url" alt />
                </div>
                <p class="word">
                  {{vo.title}}
                </p>
                <div class="author">
                  <p>{{vo.click_num}} 观看</p>
                </div>
              </div>
            </div>
            <i class="el-icon-arrow-right" @click="onNext(2)"></i>
          </div>
        </div>
      </div>

      <div class="cont-body" v-if="list3.length > 0" style="margin-top: 20px;">
        <p class="title">What`s happening?</p>
        <div class="content">
          <div class="cont-body1">
            <i class="el-icon-arrow-left" @click="onPrev(3)"></i>
            <div class="cont-body2">
              <div class="card-body" v-for="(vo,key) in list3" :key="vo.id">
                <div class="cardImg" @click="toVideo(vo.video_url,vo.id)">
                  <img :src="vo.img_url" alt />
                </div>
                <p class="word">
                  {{vo.title}}
                </p>
                <div class="author" style="justify-content: flex-start">
                  <p v-for="item in vo.label">#{{item}}</p>
                </div>
              </div>
            </div>
            <i class="el-icon-arrow-right" @click="onNext(3)"></i>
          </div>
        </div>
      </div>

      <div class="cont-body" v-if="list4.length > 0" style="margin-top: 20px;">
        <p class="title">Active Viewing</p>
        <div class="content">
          <div class="cont-body1">
            <i class="el-icon-arrow-left" @click="onPrev(4)"></i>
            <div class="cont-body2">
              <div class="card-body" v-for="(vo,key) in list4" :key="vo.id">
                <div class="cardImg" @click="toVideo(vo.video_url,vo.id)">
                  <img :src="vo.img_url" alt />
                </div>
                <p class="word">
                  {{vo.title}}
                </p>
                <div class="author">
                  <p>{{vo.click_user_num}} Streams</p>
                </div>
              </div>
            </div>
            <i class="el-icon-arrow-right" @click="onNext(4)"></i>
          </div>
        </div>
      </div>

      <div class="cont-body" v-if="list5.length > 0" style="margin-top: 20px;">
        <p class="title">Trainee</p>
        <div class="content">
          <div class="cont-body1">
            <i class="el-icon-arrow-left" @click="onPrev(5)"></i>
            <div class="cont-body2">
              <div class="card-body" v-for="(vo,key) in list5" :key="vo.id">
                <div class="cardImg" @click="toVideo(vo.video_url,vo.id)">
                  <img :src="vo.img_url" alt />
                </div>
                <p class="word">
                  {{vo.title}}
                </p>
                <div class="author">
                  <p>{{vo.create_time}}</p>
                  <p>{{vo.user_name}}</p>
                </div>
              </div>
            </div>
            <i class="el-icon-arrow-right" @click="onNext(5)"></i>
          </div>
        </div>
      </div>


      <div style="height: 60px;"></div>

    </div>
  </div>
</template>

<script>
import headerTwo from "../components/headerTwo"; //上传图片
export default {
  components: {
    headerTwo
  },
  name: "debut",

  data() {
    return {
      search_show: false,
        autoplay:false,

        list1:[],//新鲜
        page1:1,

        list2:[],//热门
        page2:1,

        list3:[],//What`s happening?
        page3:1,

        list4:[],//Active Viewing
        page4:1,

        list5:[],//Trainee
        page5:1,

        page_num: 6,
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  },
    created(){
        this.initGet();//获取初始化数据
    },
    methods:{
      initGet(){
        this.page1, this.page2, this.page3, this.page4,this.page5=1;
        this.getWatch(1);
        this.getWatch(2);
        this.getWatch(3);
        this.getWatch(4);
        this.getWatch(5);
      },
      //获取列表
      getWatch(type){
          let _this=this;
          let data={
              page_num:_this.page_num,
              type:type
          };
          //读取分页
          if(type == 1){
              data.page=_this.page1;
          }else if(type == 2){
              data.page=_this.page2;
          }else if(type == 3){
              data.page=_this.page3;
          }else if(type == 4){
              data.page=_this.page4;
          }else{
              data.page=_this.page5;
          }
          _this.common.request('api/debut/watch',data,function (res) {
              if(res.data.list.length <=0){
                  _this.$message({
                      message: '已经到底了哦',
                      type: 'warning',
                      duration: 1500,
                      center: true
                  });
                  if(type == 1){
                      _this.page1 --;
                  }else if(type == 2){
                      _this.page2 --;
                  }else if(type == 3){
                      _this.page3 --;
                  }else if(type == 4){
                      _this.page4 --;
                  }else{
                      _this.page5 --;
                  }
                  return;
              }

              if(type == 1){
                  _this.list1 = res.data.list;
              }else if(type == 2){
                  _this.list2 = res.data.list;
              }else if(type == 3){
                  _this.list3 = res.data.list;
              }else if(type == 4){
                  _this.list4 = res.data.list;
              }else{
                  _this.list5 = res.data.list;
              }
          })
      },
        //上一页
        onPrev(type){
          let _this=this;
            //读取分页
            if(type == 1){
                if(this.page1 <=1){
                    _this.$message({
                        message: '已经到底了哦',
                        type: 'warning',
                        duration: 1500,
                        center: true
                    });
                    return;
                }
                this.page1--;
            }else if(type == 2){
                if(this.page2 <=1){
                    _this.$message({
                        message: '已经到底了哦',
                        type: 'warning',
                        duration: 1500,
                        center: true
                    });
                    return;
                }
                this.page2--;
            }else if(type == 3){
                if(this.page3 <=1){
                    _this.$message({
                        message: '已经到底了哦',
                        type: 'warning',
                        duration: 1500,
                        center: true
                    });
                    return;
                }
                this.page3--;
            }else if(type == 4){
                if(this.page4 <=1){
                    _this.$message({
                        message: '已经到底了哦',
                        type: 'warning',
                        duration: 1500,
                        center: true
                    });
                    return;
                }
                this.page4--;
            }else{
                if(this.page5 <=1){
                    _this.$message({
                        message: '已经到底了哦',
                        type: 'warning',
                        duration: 1500,
                        center: true
                    });
                    return;
                }
                this.page5--;
            }
            this.getWatch(type);
        },
        //下一页
        onNext(type){
            //读取分页
            if(type == 1){
                this.page1++;
            }else if(type == 2){
                this.page2++;
            }else if(type == 3){
                this.page3++;
            }else if(type == 4){
                this.page4++;
            }else{
                this.page5++;
            }
            this.getWatch(type);
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
    }
};
</script>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";
p {
  margin: 0;
  padding: 0;
}

.top-body {
  width: 80%;
  max-width: 1278px;
  background-color: #ffffff;
  margin: 0 auto;
}
.cont-body {
  position: relative;
  .title {
    position: absolute;
    top: 0px;
    left: 60px;
    font-size: 20px;
    font-weight: 600;
  }
}
.cont-body1{
  display: flex;
  justify-content: space-between;
  align-items: center;
  i{
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(203, 212, 212, 1);
    color: white;
  }
  i:hover{
    background-color: rgba(203, 212, 212, 0.5);
  }
}
.cont-body2 {
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 120px);
  margin: 0 auto;
  position: relative;
  padding-top: 36px;
}
.card-body {
  width: 182px;
  margin-left: 10px;
  cursor: pointer;
  .cardImg {
    .border-radius(8px);
    .imgNoCut(182px;112px);
    img {
      .border-radius(8px);
    }
  }
  .word {
    .twoLines;
    height:40px;
    margin-bottom: 7px;
    margin-top: 11px;
  }
  .author {
    display: flex;
    justify-content: space-between;
    color: #7f7f7f;
    font-size: 12px;
  }
}

.content {
  margin-top: 20px;
}
</style>