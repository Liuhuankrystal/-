<template>
    <div>
        <Topheader :search_show="search_show" title="watch"></Topheader>
        <div class="top-body">

            <div class="cont-body" style="margin-top: 20px;">
                <p class="title">新鲜</p>
                <div class="content">
                    <el-carousel :interval="5000" height="230px" arrow="always" :autoplay="autoplay">
                        <el-carousel-item v-for="item in 2" :key="item">
                            <div class="cont-body">
                                <div class="cont-body2">
                                    <div class="card-body" v-for="item2 in 6" :key="item2">
                                        <img src="../../static/img/sl.jpg" alt="">
                                        <p>
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
                <p class="title">热门放送</p>
                <div class="content">
                    <el-carousel :interval="5000" arrow="always" height="230px" :autoplay="autoplay">
                        <el-carousel-item v-for="item in 2" :key="item">
                            <div class="cont-body">
                                <div class="cont-body2">
                                    <div class="card-body" v-for="item2 in 6" :key="item2">
                                        <img src="../../static/img/sl.jpg" alt="">
                                        <p>
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
                <p class="title">What`s happening?</p>
                <div class="content">
                    <el-carousel :interval="5000" height="230px" arrow="always" :autoplay="autoplay">
                        <el-carousel-item v-for="item in 2" :key="item">
                            <div class="cont-body">
                                <div class="cont-body2">
                                    <div class="card-body" v-for="item2 in 6" :key="item2">
                                        <img src="../../static/img/sl.jpg" alt="">
                                        <p>
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
                <p class="title">Active  Viewing</p>
                <div class="content">
                    <el-carousel :interval="5000" height="230px" arrow="always" :autoplay="autoplay">
                        <el-carousel-item v-for="item in 2" :key="item">
                            <div class="cont-body">
                                <div class="cont-body2">
                                    <div class="card-body" v-for="item2 in 6" :key="item2">
                                        <img src="../../static/img/sl.jpg" alt="">
                                        <p>
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
                <p class="title">Trainee</p>
                <div class="content">
                    <el-carousel :interval="5000" height="230px" arrow="always" :autoplay="autoplay">
                        <el-carousel-item v-for="item in 2" :key="item">
                            <div class="cont-body">
                                <div class="cont-body2">
                                    <div class="card-body" v-for="item2 in 6" :key="item2">
                                        <img src="../../static/img/sl.jpg" alt="">
                                        <p>
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
    import Topheader from "../components/header"; //上传图片
    export default {
        components:{
            Topheader
        },
        name: "debut",

        data(){
            return {
                'search_show':false,
                'autoplay':false
            }
        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#fff");
        },
    }
</script>

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";
    p{margin: 0;padding: 0;}
    .top-body{
        width: 80%;
        background-color: #ffffff;
        margin: 0 auto;
    }
.cont-body{

}
.cont-body2{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
.card-body{
    width: 16%;
    cursor: pointer;
    img{
        width: 100%;
        border-radius: 4px;
    }
    .author{
        display: flex;
        justify-content: space-between;
        color: #7F7F7F;
        font-size: 12px;
    }
}
.title{
    font-size: 20px;
    font-weight: 600;
}

    .content{
        margin-top: 20px;
    }


</style>