<template>
        <div>
            <Topheader></Topheader>
            <div class="w1100">
                <div class="list-body" v-for="item in 8" :key="item">
                    <div class="list-left">
                            <img src="../../static/img/sl.jpg" alt="">
                        <div class="user-name-body">
                            <div class="user-name">
                                Username
                            </div>
                            <div class="user-spk">
                                <div>
                                    明天有空了吗？见个面吃个饭，很想你啦…
                                </div>
                                <span>11.28 at 08:26PM</span>
                            </div>
                        </div>
                    </div>

                    <div class="list-right">
                        <div v-if="item == 1" class="audit-body">
                            <div class="audit-yes">同意</div>
                        </div>
                        <div class="yhui" v-else>
                            已回复
                        </div>

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
        name: "interact",
        data() {
            return {
                '':''
            };
        },
        created() {

        },
        //方法定义
        methods: {}
    }
</script>

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";
    .list-body{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #D6D6D6;
        padding: 10px;
    }
    .list-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 54px;
            height: 54px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .user-name{
            font-weight: 600;
            cursor: pointer;
        }
        .user-name:hover{
            text-decoration: underline;
            color: #08486D;
        }
        .user-spk{
            font-size: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        span{
            font-size: 14px;
            color: #7F7F7F;
            margin-left: 10px;
        }
    }
    .audit-body{
        display: flex;
        justify-content: space-between;
    }
    .audit-yes{
        width: 58px;
        height: 28px;
        border-radius: 6px;
        color: #FFFFFF;
        text-align: center;
        line-height: 28px;
        cursor: pointer;
    }
    .audit-yes{
        background:rgba(221,44,190,1);    }
    .audit-yes:hover{
        background:rgba(221,44,190,0.7);    }

    .yhui{
        color: #71909E;
    }

</style>