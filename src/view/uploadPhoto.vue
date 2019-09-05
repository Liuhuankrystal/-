<template>
  <div>
    <div class="w1100 uploadPhoto">
      <div class="uploadPhotoImg">

        <!-- 截图插件地址
        https://github.com/xyxiao001/vue-cropper/blob/master/test/index.html
         -->
        <VueCropper
          ref="cropper"
          :img="option.img"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="true"
          :full="option.full"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :fixed-box="option.fixedBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          @real-time="realTime"
          :high="option.high"
        ></VueCropper>

        <div class="addReduce">
          <div class="add" @click="changeScale(1)">+</div>
          <div class="line"></div>
          <div class="Reduce" @click="changeScale(-1)">-</div>
        </div>
      </div>
      <div class="right">
        <div class="back" @click="back()">返回</div>

        <div class="phoneImg">
          <div
            class="show-preview"
            :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', }"
          >
            <div :style="previews.div" class="perviewImg">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
        </div>

        <div class="tips">
          <label class="btn" for="uploads">添加个人形象照</label>
          <input
            type="file"
            id="uploads"
            style="position:absolute; clip:rect(0 0 0 0);"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event, 1)"
          />
        </div>
        <div class="sureButton" @click="finish('blob')">确定</div>
        <!-- <button @click="finish('base64')" class="btn">preview(base64)</button> -->
        <!-- <button @click="finish('blob')" class="btn">preview(blob)</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
import axios from 'axios'
export default {
  name: "uploadPhoto",
  components: {
    VueCropper
  },
  data() {
    return {
      reg: {
        name: "",
        email: "",
        password: ""
      },
      //上传图片
      model: false,
      modelSrc: "",
      previews: {
        ur: "../../static/img/tou.png"
      },
      crap: false,

      option: {
        img: "../../static/img/tou.png",
        size: 1,
        full: true,
        outputType: "png", //jpeg,png,webp
        canMove: true,
        fixedBox: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth:140,
        autoCropHeight:140,
        centerBox: false,
        high: true
      },
        fileName:'',//本机文件地址
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#474747");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  created() {
    this.reg = this.$route.params;
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    //注册
    regSub() {
      let _this = this;
      let reg = _this.reg;
      _this.common.request(
        "api/user/register",
        reg,
        function(res) {
          if (res.status == 200) {
            localStorage.setItem("_token", res.data["user-token"]);
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            _this.$message({
              message: res.message,
              type: "success",
              duration: 1500,
              center: true,
              onClose: function(res) {
                _this.$router.push("/dynamic");
              }
            });
          }
        },
        "post"
      );
    },
    //上传图片
    uploadImg(e, num) {
      // this.option.img;
        let _this=this;
      var file = e.target.files[0];
      console.log(file);
        _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      // reader.readAsArrayBuffer(file);
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    //+-
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    finish(type) {
        let _this=this;
        var formData = new window.FormData(); // vue 中使用 window.FormData(),否则会报 'FormData isn't definded

        // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          var img = window.URL.createObjectURL(data);
          this.model = true;
          this.modelSrc = img;
            formData.append('file', data,_this.fileName);
            _this.common.requestUp(formData,function (res) {
                if(res.status == 1){
                    _this.reg.head_id=res.data.id;
                    _this.regSub();//执行注册
                }
            });//上传文件
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.model = true;
          this.modelSrc = data;
          console.log(this.modelSrc);
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/index.less";
body {
  background: #474747;
}
.uploadPhoto {
  margin-top: 48px;
  .flexSBetween;
  .uploadPhotoImg {
    width: 600px;
    height: 600px;
    .flexStart;
    position: relative;
    img {
      width: 600px;
      height: 600px;
    }
    .addReduce {
      .positionALB(76px, 26px);
      width: calc(100% -76px);
      margin: 0 auto;
      .flexSBetween;
      .add,
      .Reduce {
        width: 32px;
        height: 32px;
        line-height: 29px;
        background: #fff;
        color: #000;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        .border-radius(50%);
        text-align: center;
      }
      .line {
        background: #9d9d9d;
        width: 347px;
        height: 8px;
        margin: 0 20px;
        .border-radius(4px);
      }
    }
  }
  .right {
    .back {
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
    .phoneImg {
      margin: 76px auto 59px auto;
        width: 140px;
        height: 140px;
        background: #5b5b5b;
        .border-radius(50%);
        .perviewImg{
          .border-radius(50%);
        }
      img {
        // .flexStart;
        // overflow: hidden;
        //  .border-radius(50%);
        // max-width: 140px;
        // max-height: 140px;
        // line-height: 140px;
        // margin: 0 auto;
      }
    }
    .tips {
      cursor: pointer;
      color: #bbbbbb;
      font-size: 18px;
      margin-bottom: 183px;
      label {
        width: 100%;
        height: 24px;
        cursor: pointer;
      }
    }
    .sureButton {
      text-align: center;
      width: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      background: #636464;
      color: #063e6d;
      margin: 0 auto;
      cursor: pointer;
      .border-radius(10px);
    }
    .sureButton:hover {
      background: #0a7ddf;
      color: #fff;
    }
  }
}
</style>