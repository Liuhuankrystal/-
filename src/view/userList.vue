<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="list-body" v-for="item in 3" :key="item">
                <div class="title">张伯卿</div>
                <div class="user-spk">Sr Engineering Manager</div>
                <div class="user-keyword">
                    每个人在Facebook上的表达为对另一个人的“馈赠”。在这种各式各样的有益交流中，你的付出
                    得到了回报，通常是种连锁反应，通过这种相互的贡献和交流，你可以从别处知道一些你从不知
                    晓的东西。
                </div>
                <div class="user-count">
                    <img src="../../static/img/logo.png" alt="">
                    <div>
                        <span>互联网 · 成都</span>
                        <span>1,286 Post</span>
                        <span>· 27次高亮时刻</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Topheader from "../components/header"; //上传图片
    export default {
        name: "userList",
        components:{
            Topheader
        },
        data() {
            return {
                keyword: 'sbv'
            };
        },
        created() {
            this.keyword=this.$route.query.keyword;//
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

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";

    .list-body{
        padding: 20px 0;
        .title{
            color: #227CBB;
            font-size: 18px;
            font-weight: 600;
        }
        .user-spk{
            font-size:16px;
            font-family:Arial;
            font-weight:bold;
            color:rgba(77,77,77,1);
            line-height:24px;
        }
        .user-keyword{
            width: 600px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(28,28,28,1);
            line-height:24px;
        }
        .user-count{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                width: 16px;
                height: 16px;
            }
            span{
                margin-left: 8px;
                color: #7F7F7F;
                font-size: 14px;
            }
        }
    }


</style>