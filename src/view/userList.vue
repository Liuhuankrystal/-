<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="num-body"> {{keyword}} 共有 16 条</div>
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

            <!--分页-->
            <div class="page-body">
                <div class="up-page">上一页</div>

                <div class="num-page" :class="item == 1 ? 'act' : ''" v-for="item in 7" :key="item">
                    {{item}}
                </div>

                <div class="next-page">
                    下一页
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

    .num-body{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(113,113,113,1);
        line-height:54px;
    }

    .list-body{
        padding: 15px 0;
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

    .page-body{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        .up-page{
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(127,127,127,1);
            line-height:22px;
            cursor: pointer;

        }
        .num-page{
            width:28px;
            height:28px;
            line-height: 28px;
            background:rgba(242,240,233,1);
            border-radius:50%;
            text-align: center;
            color: #B1B1B1;
            margin-left: 10px;
            cursor: pointer;
        }
        .num-page:hover{
            background:rgba(242,240,233,0.7);
        }
        .next-page{
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(127,127,127,1);
            line-height:22px;
            margin-left: 10px;
            cursor: pointer;
        }
        .act{
            font-size:16px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(65,65,65,1);
            background: 0;
        }
    }


</style>