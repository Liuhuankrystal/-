<template>
  <div>
    <Topheader></Topheader>

    <div class="w1100">
      <div class="home">
        <div class="left">
          <div class="name">
            <img src alt />
            <div class="names">张伯卿</div>
          </div>

          <div class="name">
            <img src alt />
            <div class="names">Debut</div>
          </div>
          <div class="tit">CANAPE</div>
          <div class="name">
            <img src alt />
            <div class="names">Debut</div>
          </div>
        </div>
        <div class="center">
          <div class="postMsg">
            <div class="tabs">
              <div class="word active">
                <img src alt />
                Update Some
              </div>
              <div class="word">
                   <img src alt />
                   Add Photos</div>
            </div>
            <div class="fromWord">
                <textarea placeholder="你有什么事？" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="post">
              <button>Post</button>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Topheader from "../components/header"; //上传图片
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      passWord: ""
    };
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

.home {
  .flexSBetween;
  .left {
    .name {
      margin-bottom: 10px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
        background: #000;
      }
      .names {
        color: #353535;
      }
    }
    .tit {
      color: #7f7f7f;
      font-size: 14px;
      margin: 14px 0;
    }
  }
  .center {
    width: 544px;
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
        }
        .word.active {
          position: relative;
        }
        .word.active::before {
          content: "";
          position: absolute;
          bottom: -13px;
          left: 50%;
          margin-left:0px;
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
        textarea{
            color: #AFAFAF;
            font-size: 14px;
            height: 54px;
            outline: none;
            resize:none;
            width: 100%;
            border: none;
        }

      }
      .post {
        border-top: 1px solid #d6d6d6;
        padding: 10px 14px;
        button {
          color: #15a3f5;
          font-size: 14px;
          width: 62px;
          height: 26px;
          line-height: 26px;
          background: #e8e8e8;
          border-radius: 13px;
          text-align: center;
          outline: none;
        }
      }
    }
  }
  .right {
    width: 336px;
    background: #fff;
  }
}
</style>