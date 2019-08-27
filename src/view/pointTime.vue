<template>
  <div>
    <Topheader></Topheader>
    <div class="w1100" :class="bigIMgShow==true?'bgactive':''">
      <!-- 小图列表 -->
      <ul class="topPortrait">
        <li v-for="item in 10" :key="item">
          <div class="topImg">
            <img src="../../static/img/sl.jpg" alt />
          </div>
          <div class="name">何玉玲</div>
        </li>
      </ul>

      <!-- 大图列表 -->
      <div class="ImgAll">
        <el-row>
          <el-col class="ImgLi" :span="8" v-for="item in 9" :key="item">
            <div class="grid-content">
              <div class="bigImg" @click="showBigImg(item)">
                <img src="../../static/img/sl.jpg" alt />
              </div>
              <div class="NameNum">
                <div class="Name">何玉玲</div>
                <div class="Num">2,86</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 弹窗 -->
    <div class="bg" v-show="bigIMgShow==true" @click="close()"></div>
    <div class="bigIMgShow" v-show="bigIMgShow==true">
      <div class="left">
        <div class="num">2,862Highlight</div>
        <div class="wordTime">
          <div class="word">
            什么是有效的社交？如何才会找到可靠的人一起吃喝玩
            乐？怎么样才能避免尴尬而又不失礼貌的认识新朋友？
            来参加我们的活动吧，以游戏作为切入点，愉快健康，
            斗智斗勇，随性自然，各行各业均有涉足。除了游戏，
            我们还可以吃好的，玩有趣的，只要你来，一定会发现
            更好的周末娱乐方式。
           
          </div>
          <div class="time">09.28 at 08:26 AM</div>
        </div>
        <div class="nameImg">
          <div class="Img">
            <img src="../../static/img/sl.jpg" alt />
          </div>
          <span>何诗诗</span>
        </div>
      </div>
      <div class="right">
        <img src="../../static/img/head.png" alt />
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
      // 大图列表
      list: [
        {
          id: "1",
          img: "../../static/img/sl.jpg",
          name: "何玉玲",
          num: "2,86"
        }
      ],
      bigIMgShow: false //弹窗
    };
  },
  methods: {
    //显示大图
    showBigImg() {
      this.bigIMgShow = true;
    },
    close() {
      this.bigIMgShow = false;
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
    .imgNoCut(560px;622px;);
  }
}
</style>