<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">

            <div class="list-body" v-for="item in 2" :key="item">

                <div class="head-body">
                    <div class="head-left">
                        <img src="../../static/img/sl.jpg" alt="">
                        <div class="head-info">
                            <div class="head-title">Username</div>
                            <div class="linker-time">2019.12.18 建立 Link</div>
                            <div class="head-spk">Serving you is 互联网产品经理执行</div>
                        </div>
                    </div>

                    <div class="head-right">
                        <div class="jc-btn">解除Link</div>
                    </div>
                </div>

                <div class="info-body">
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">Live in 四川 成都 from China.</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">Occupation or research field is 互联网产品设计</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">成就  创建woshuoxia</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">marijatiurina.com</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">
                            前端Div+Css'2013、原型工具axure'2008、UI'2010、心理学'2010、客户端'2016、工程结构'2009
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
    import Topheader from "../components/header"; //上传图片
    export default {
        name: "linkers",
        components:{
            Topheader
        },
        data() {
            return {
                '': ''
            };
        },
        created() {

        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#fff");
        },
        //方法定义
        methods: {}
    }
</script>

<style scoped lang='less' rel="stylesheet/less">
    @import "../assets/css/index.less";

    .list-body{
        margin-top: 34px;
        .head-body{
            display: flex;
            justify-content: space-between;
            border-bottom: #D6D6D6 1px solid;
            padding: 18px 0;
            .head-left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width:88px;
                    height:88px;
                    background:rgba(199,199,199,1);
                    border-radius:50%;
                }
                .head-info{
                    margin-left: 18px;
                    .head-title{
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:600;
                        color:rgba(28,28,28,1);
                        line-height:24px;
                    }
                    .linker-time{
                        font-size:12px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(127,127,127,1);
                        line-height:24px;
                    }
                    .head-spk{
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:19px;
                        color: #1D1D1D;
                    }
                }
            }
            .head-right{
                .jc-btn{
                    width:88px;
                    height:32px;
                    background:rgba(223,191,39,1);
                    border-radius:6px;
                    color: white;
                    text-align: center;
                    line-height: 32px;
                    cursor: pointer;
                }
                .jc-btn:hover{
                    background:rgba(223,191,39,0.7);
                }
            }
        }

        .info-body{
            margin-top: 18px;
            .info-list{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 18px;
                img{
                    width:20px;
                    height:20px;
                }
                .info-spk{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(77,77,77,1);
                    line-height:19px;
                    margin-left: 18px;
                }
            }
        }

    }

</style>