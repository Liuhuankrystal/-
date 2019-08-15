<template>
  <div class='header'>
    <div class="w1100 ">
      <div class="left">
        <input type="text"  placeholder="搜索伙伴"/>
      </div>
      <div class="right">
        <div class="name">Bukin</div>
        <div class="line"></div>
        <div class="gohome">Home</div>
        <div class="peple">
          <div class="num">8</div>
        </div>
        <div class="news">
          <div class="num">99</div>
        </div>
        <div class="down">>></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'  rel="stylesheet/less">
@import "../assets/css/index.less";

.header {
    background: #fff;
   padding: 8px 0;
  .w1100{
      .flexSBetween;
  }
  .left {
    input {
      width: 328px;
      height: 32px;
      text-indent: 22px;
      background: #ededed;
      border-radius: 16px;
    }
  }
  .right {
      *{
          margin-left: 20px;
      }
    .flexEnd;
    .name {
      color: #2c2c2c;
      font-size: 14px;
    }
    .line {
      background: #e2e2e2;
      width: 2px;
      height: 24px;
    }
    .gohome{
        color: #2C2C2C;
        font-size: 14px;
    }
    .peple,.news {
      background: #2e4756;
      width: 18px;
      height: 18px;
      position: relative;
      .num {
          .positionART(-10px,-10px);
          background:#FF0000;
          border-radius:7px;
          color: #fff;
          font-size: 12px;
          padding: 2px 5px;
      }
    }
  }
}
</style>