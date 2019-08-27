<template>
  <div>
    <headerTwo :search_show="search_show" title="watch"></headerTwo>

    <!-- for循环了， -->
    <div class="top-body">
      <div class="cont-body" style="margin-top: 20px;" v-for="(item,index) in list" :key="index">
       
        <div class="content">
          <el-carousel :interval="5000" height="247px" arrow="always" :autoplay="autoplay">
            <el-carousel-item>
              <div class="cont-body">
                <div class="cont-body2">
                     <p class="title">{{item.tit}}</p>
                  <div class="card-body" v-for="(item2,index2) in item.contList" :key="index2">
                    <div class="cardImg">
                      <img :src="item2.img" alt />
                    </div>
                    <p class="word">{{item2.word}}</p>
                    <div class="author">
                      <p>{{item2.name}}</p>
                      <p>{{item2.time}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <!-- 展示用 -->

    <div class="top-body">
      <div class="cont-body" style="margin-top: 20px;">
       
        <div class="content">
          <el-carousel :interval="5000" height="247px" arrow="always" :autoplay="autoplay">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="cont-body">
                <div class="cont-body2">
                     <p class="title">新鲜</p>
                  <div class="card-body" v-for="item2 in 6" :key="item2">
                    <div class="cardImg">
                      <img src="../../static/img/sl.jpg" alt />
                    </div>
                    <p class="word">
                      和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记 和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记
                    </p>
                    <div class="author">
                      <p>穆风杰</p>
                      <p>8小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="cont-body">
        
        <div class="content">
          <el-carousel :interval="5000" arrow="always" height="247px" :autoplay="autoplay">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="cont-body">
                <div class="cont-body2">
                    <p class="title">热门放送</p>
                  <div class="card-body" v-for="item2 in 6" :key="item2">
                    <div class="cardImg">
                      <img src="../../static/img/sl.jpg" alt />
                    </div>
                    <p class="word">
                      和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记
                    </p>
                    <div class="author">
                      <p>穆风杰</p>
                      <p>8小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="cont-body">
       
        <div class="content">
          <el-carousel :interval="5000" height="247px" arrow="always" :autoplay="autoplay">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="cont-body">
                <div class="cont-body2">
                     <p class="title">What`s happening?</p>
                  <div class="card-body" v-for="item2 in 6" :key="item2">
                    <div class="cardImg">
                      <img src="../../static/img/sl.jpg" alt />
                    </div>
                    <p class="word">
                      和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记
                    </p>
                    <div class="author">
                      <p>穆风杰</p>
                      <p>8小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="cont-body">
       
        <div class="content">
          <el-carousel :interval="5000" height="247px" arrow="always" :autoplay="autoplay">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="cont-body">
                <div class="cont-body2">
                     <p class="title">Active Viewing</p>
                  <div class="card-body" v-for="item2 in 6" :key="item2">
                    <div class="cardImg">
                      <img src="../../static/img/sl.jpg" alt />
                    </div>
                    <p class="word">
                      和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记
                    </p>
                    <div class="author">
                      <p>穆风杰</p>
                      <p>8小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="cont-body">
        
        <div class="content">
          <el-carousel :interval="5000" height="247px" arrow="always" :autoplay="autoplay">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="cont-body">
                <div class="cont-body2">
                    <p class="title">Trainee</p>
                  <div class="card-body" v-for="item2 in 6" :key="item2">
                    <div class="cardImg">
                      <img src="../../static/img/sl.jpg" alt />
                    </div>
                    <p class="word">
                      和新的朋友一起去拍写真, 成都
                      宽窄巷子里的游记
                    </p>
                    <div class="author">
                      <p>穆风杰</p>
                      <p>8小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
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
      autoplay: false,
      list: [
        {
          tit: "新鲜test",
          contList: [
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            },
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            },
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            },
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            },
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            },
            {
              img: "../../static/img/sl.jpg",
              word:
                " 和新的朋友一起去拍写真, 成都宽窄巷子里的游记 和新的朋友一起去拍写真, 成都宽窄巷子里的游记",
              name: "穆风杰",
              time: "8小时前"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
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
}
.cont-body2 {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 120px);
  margin: 0 auto;
  position: relative;
  padding-top:36px;
  .title {
      position: absolute;
      top:0px;
      left: 0;
  font-size: 20px;
  font-weight: 600;
}
}
.card-body {
  width: 182px;
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
    height: 35px;
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