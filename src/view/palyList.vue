<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="list-body" v-for="item in 4" :key="item">
                <div class="time-body">2019-08-26</div>

                <div class="list2-body" v-for="item2 in 2" :key="item2">
                    <img src="../../static/img/sl.jpg" alt="">
                    <div class="list-info">
                        <div class="list-title">第一次现场见罗永浩的那一天</div>
                        <div class="list-count">
                            <span>07.28.2019 10:28PM</span>
                            <span>3,568 from woshuoxia people play</span>
                        </div>
                        <div class="list-tage">
                            <span>#名人见面</span>
                            <span>#名人见面</span>
                            <span>#名人见面</span>
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
        name: "palyList",
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
    margin-top: 18px;
}

    .list2-body{
        display: flex;
        justify-content: flex-start;
        margin-top: 18px;
        img{
            width:182px;
            height:112px;
            background:rgba(165,165,165,1);
            border-radius:8px;
        }
        .list-info{
            margin-left: 18px;
            .list-title{
                font-size:18px;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(28,28,28,1);
                line-height:36px;
            }
            .list-count{
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(77,77,77,1);
                line-height:30px;
            }
            .list-tage{
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(29,29,29,1);
                line-height:30px;
                span{
                    margin-left: 18px;
                }
                span:first-child{
                    margin-left: 0;
                }
            }
        }
    }
</style>