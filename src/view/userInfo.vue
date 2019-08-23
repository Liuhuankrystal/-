<template>
    <div>
        <Topheader></Topheader>
        <div class="w1100">
            <div class="top-content">
                <div class="head-body">
                    <img src="../../static/img/head.png" alt="">
                </div>

                <div class="head-right-body">
                    <div class="info-title">
                        <div class="info-name">穆风杰</div>
                        <div class="info-set">编辑个人设定</div>
                    </div>

                    <div class="info-spk">
                        Instagram 是捕捉和分享世界精彩瞬间的简单方式。只需关注，即可借他人之眼来捕捉
                        全球的精彩瞬间，并从中发现趣味。超过 10 亿用户选择了 Instagram，速速加入他们，
                        用照片和视频拍下不一样的每一天，用影像传达个性符号吧！
                    </div>

                    <div class="info-count">
                        <div class="info-cou">
                            <div class="count-num">1,266</div>
                            <div class="count-spk">Posts</div>
                        </div>
                        <div class="info-cou">
                            <div class="count-num">12.6K</div>
                            <div class="count-spk">Interflows</div>
                        </div>
                        <div class="info-cou">
                            <div class="count-num">18.6M</div>
                            <div class="count-spk">Searched</div>
                        </div>
                    </div>

                </div>
            </div>

            <!--内容信息-->
            <div class="list-body">
                <div class="list-info" v-for="item in listNum" :key="item">
                    <img src="../../static/img/sl.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import Topheader from "../components/header"; //上传图片
    export default {
        components:{
            Topheader
        },
        name: "userInfo",
        data(){
            return {
                listNum:6,
            }
        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#F6F6F6");
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        methods:{
            //加载跟多
            onScroll() {
                //可滚动容器的高度
                let innerHeight = document.querySelector('#app').clientHeight;
                //屏幕尺寸高度
                let outerHeight = document.documentElement.clientHeight;
                //可滚动容器超出当前窗口显示范围的高度
                let scrollTop = document.documentElement.scrollTop;
                //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
                console.log(innerHeight + " " + outerHeight + " " + scrollTop);
                if (innerHeight < (outerHeight + scrollTop)) {
                    //加载更多操作
                    console.log("loadmore");
                    this.listNum += 6;

                }
            }
        }
    }
</script>

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";

    .top-content{
        display: flex;
        justify-content: flex-start;
        padding: 20px 0;
        align-items: center;
    }

    .head-body{
        width: 20%;
        text-align: center;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin:0 auto;
        }
    }

    .head-right-body{
        width: 80%;
    }

    .info-title{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        line-height: 30px;
    }

    .info-name{
        font-weight: 600;
        font-size: 18px;
    }
    .info-set{
        margin-left: 20px;
        font-size: 14px;
        color: #187EB9;
        cursor: pointer;
    }
    .info-set:hover{
        text-decoration: underline;
    }

    .info-spk{
        width:605px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(91,91,91,1);
        line-height:24px;
    }

    .info-count{
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
    }



    .info-cou{
        margin-left: 40px;
    }

    .count-num{
        font-size: 22px;
        font-weight: bold;
    }

    .count-spk{
        font-size: 14px;
        color: #8B8B8B;
    }

    .info-count .info-cou:first-child{
        margin-left: 0;
    }

    /*lists*/
    .list-body{
        display: flex;
        flex-wrap: wrap;
    }

    .list-info{
        height: 350px;
        width: 350px;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>